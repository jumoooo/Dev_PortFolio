import { boot } from 'quasar/wrappers';
import i18n from 'src/utils/i18n/i18n.js';

export default boot(async ({ app }) => {
  app.use(i18n);
});
