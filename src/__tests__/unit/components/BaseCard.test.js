import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseCard from 'src/components/base/BaseCard.vue';

describe('BaseCard.vue', () => {
  // 간단한 마운트 (Quasar 플러그인 없이)
  const mountComponent = (options = {}) => {
    return mount(BaseCard, {
      global: {
        stubs: {
          'q-card': {
            template: '<div class="q-card"><slot /></div>',
          },
        },
      },
      ...options,
    });
  };

  it('컴포넌트가 렌더링된다', () => {
    const wrapper = mountComponent();
    expect(wrapper.exists()).toBe(true);
  });

  it('기본 props 값이 적용된다', () => {
    const wrapper = mountComponent();

    // flat: true, bordered: true가 기본값
    expect(wrapper.vm.flat).toBe(true);
    expect(wrapper.vm.bordered).toBe(true);
  });

  it('flat props를 false로 설정할 수 있다', () => {
    const wrapper = mountComponent({
      props: {
        flat: false,
      },
    });

    expect(wrapper.vm.flat).toBe(false);
  });

  it('bordered props를 false로 설정할 수 있다', () => {
    const wrapper = mountComponent({
      props: {
        bordered: false,
      },
    });

    expect(wrapper.vm.bordered).toBe(false);
  });

  it('슬롯 콘텐츠를 렌더링한다', () => {
    const wrapper = mountComponent({
      slots: {
        default: '<div class="test-content">테스트 콘텐츠</div>',
      },
    });

    expect(wrapper.html()).toContain('테스트 콘텐츠');
    expect(wrapper.find('.test-content').exists()).toBe(true);
  });

  it('여러 슬롯을 동시에 사용할 수 있다', () => {
    const wrapper = mountComponent({
      slots: {
        default: '<div>기본 슬롯</div>',
      },
    });

    expect(wrapper.html()).toContain('기본 슬롯');
  });

  it('attrs를 q-card에 전달한다', () => {
    const wrapper = mountComponent({
      attrs: {
        class: 'custom-class',
        'data-test': 'test-value',
      },
    });

    const qCard = wrapper.find('.q-card');
    expect(qCard.classes()).toContain('custom-class');
    expect(qCard.attributes('data-test')).toBe('test-value');
  });
});
