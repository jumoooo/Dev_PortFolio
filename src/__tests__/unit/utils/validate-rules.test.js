import { describe, it, expect } from 'vitest';
import {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
} from 'src/utils/validate-rules';

describe('validate-rules', () => {
  describe('validateRequired', () => {
    it('값이 있으면 true를 반환한다', () => {
      expect(validateRequired('test')).toBe(true);
      expect(validateRequired('a')).toBe(true);
      expect(validateRequired(123)).toBe(true);
    });

    it('빈 문자열이면 에러 메시지를 반환한다', () => {
      const result = validateRequired('');
      expect(typeof result).toBe('string');
    });

    it('null이나 undefined면 에러 메시지를 반환한다', () => {
      const resultNull = validateRequired(null);
      const resultUndefined = validateRequired(undefined);

      expect(typeof resultNull).toBe('string');
      expect(typeof resultUndefined).toBe('string');
    });
  });

  describe('validateEmail', () => {
    it('올바른 이메일 형식이면 true를 반환한다', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.kr')).toBe(true);
      expect(validateEmail('test123@test.com')).toBe(true);
    });

    it('잘못된 이메일 형식이면 에러 메시지를 반환한다', () => {
      const result1 = validateEmail('test');
      expect(typeof result1).toBe('string');

      const result2 = validateEmail('test@');
      expect(typeof result2).toBe('string');

      const result3 = validateEmail('@example.com');
      expect(typeof result3).toBe('string');
    });
  });

  describe('validatePassword', () => {
    it('올바른 비밀번호 형식이면 true를 반환한다', () => {
      // 영문, 숫자, 특수기호 조합 8자리 이상
      expect(validatePassword('Test1234!')).toBe(true);
      expect(validatePassword('Abcd1234@')).toBe(true);
      expect(validatePassword('Password1#')).toBe(true);
    });

    it('영문이 없으면 에러 메시지를 반환한다', () => {
      const result = validatePassword('12345678!');
      expect(typeof result).toBe('string');
    });

    it('숫자가 없으면 에러 메시지를 반환한다', () => {
      const result = validatePassword('TestTest!');
      expect(typeof result).toBe('string');
    });

    it('특수문자가 없으면 에러 메시지를 반환한다', () => {
      const result = validatePassword('Test1234');
      expect(typeof result).toBe('string');
    });

    it('8자 미만이면 에러 메시지를 반환한다', () => {
      const result = validatePassword('Test1!');
      expect(typeof result).toBe('string');
    });
  });

  describe('validatePasswordConfirm', () => {
    it('비밀번호가 일치하면 true를 반환한다', () => {
      expect(validatePasswordConfirm('Test1234!', 'Test1234!')).toBe(true);
      expect(validatePasswordConfirm('password', 'password')).toBe(true);
    });

    it('비밀번호가 일치하지 않으면 에러 메시지를 반환한다', () => {
      const result = validatePasswordConfirm('Test1234!', 'Different1!');
      expect(typeof result).toBe('string');
    });

    it('빈 문자열 비교도 처리한다', () => {
      expect(validatePasswordConfirm('', '')).toBe(true);

      const result = validatePasswordConfirm('Test1234!', '');
      expect(typeof result).toBe('string');
    });
  });
});
