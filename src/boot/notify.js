import { boot } from 'quasar/wrappers';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  const { notify } = app.config.globalProperties.$q;

  // 에러
  notify.registerType('err-notif', {
    icon: 'announcement',
    progress: true,
    color: 'red',
    textColor: 'white',
  });

  // 경고
  notify.registerType('warning-notif', {
    icon: 'warning',
    progress: true,
    color: 'orange',
    textColor: 'white',
  });
});
