// 유효성 js
import i18n from './i18n/i18n';
const { t } = i18n.global;

const validateRequired = val => !!val || t('message.1008'); // 필수값 입니다.

const validateEmail = val => {
  const reg =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return reg.test(val) || t('message.1009'); // 이메일 형식이 아닙니다.
};

const validatePassword = val => {
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  return reg.test(val) || t('message.1010'); // 비밀번호는 영문, 숫자, 특수기호 조합 8자리 이상 입력하세요.
};

const validatePasswordConfirm = (password, passwordConfirm) =>
  password === passwordConfirm || t('message.1011'); // 비밀번호 값이 일치하지 않습니다!

export {
  validateRequired,
  validateEmail,
  validatePassword,
  validatePasswordConfirm,
};
