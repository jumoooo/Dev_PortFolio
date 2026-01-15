import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ref } from 'vue';
import { useTag } from 'src/composables/useTag';

describe('useTag', () => {
  let tags;
  let updateTags;
  let maxLengthMessage;

  beforeEach(() => {
    // 각 테스트 전에 초기화
    tags = ref([]);
    updateTags = vi.fn(newTags => {
      tags.value = newTags;
    });
    maxLengthMessage = '태그는 10개 이상 등록할 수 없습니다.';
  });

  describe('addTag', () => {
    it('문자열로 태그를 추가할 수 있다', () => {
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      addTag('Vue');

      expect(updateTags).toHaveBeenCalledWith(['Vue']);
      expect(tags.value).toEqual(['Vue']);
    });

    it('이벤트 객체로 태그를 추가할 수 있다', () => {
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      const mockEvent = {
        target: {
          value: 'JavaScript',
        },
      };

      addTag(mockEvent);

      expect(updateTags).toHaveBeenCalledWith(['JavaScript']);
      expect(mockEvent.target.value).toBe(''); // 입력값 초기화 확인
    });

    it('태그에서 공백을 제거한다', () => {
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      addTag('Vue 3');

      expect(tags.value).toEqual(['Vue3']);
    });

    it('빈 문자열은 추가하지 않는다', () => {
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      addTag('');

      expect(updateTags).not.toHaveBeenCalled();
      expect(tags.value).toEqual([]);
    });

    it('중복된 태그는 추가하지 않는다', () => {
      tags.value = ['Vue'];
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      addTag('Vue');

      // 첫 번째 호출만 확인 (중복 추가 시도는 무시됨)
      expect(tags.value).toEqual(['Vue']);
    });

    it('태그가 10개 이상이면 알림을 표시한다', () => {
      // $q.notify mock 추가 (useTag.js가 $q를 사용하므로)
      global.$q = { notify: vi.fn() };

      // 10개의 태그로 초기화
      tags.value = Array.from({ length: 10 }, (_, i) => `tag${i}`);
      const { addTag } = useTag({ tags, updateTags, maxLengthMessage });

      addTag('newTag');

      // notify가 호출되었는지 확인
      expect(global.$q.notify).toHaveBeenCalledWith(maxLengthMessage);

      // cleanup
      delete global.$q;
    });
  });

  describe('removeTag', () => {
    beforeEach(() => {
      tags.value = ['Vue', 'React', 'Angular'];
    });

    it('인덱스로 태그를 삭제할 수 있다', () => {
      const { removeTag } = useTag({ tags, updateTags, maxLengthMessage });

      removeTag(1); // 'React' 삭제

      expect(updateTags).toHaveBeenCalledWith(['Vue', 'Angular']);
      expect(tags.value).toEqual(['Vue', 'Angular']);
    });

    it('첫 번째 태그를 삭제할 수 있다', () => {
      const { removeTag } = useTag({ tags, updateTags, maxLengthMessage });

      removeTag(0);

      expect(tags.value).toEqual(['React', 'Angular']);
    });

    it('마지막 태그를 삭제할 수 있다', () => {
      const { removeTag } = useTag({ tags, updateTags, maxLengthMessage });

      removeTag(2);

      expect(tags.value).toEqual(['Vue', 'React']);
    });
  });
});
