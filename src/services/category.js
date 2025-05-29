import i18n from 'src/utils/i18n/i18n';
const { t } = i18n.global;

export function getCategories() {
  const { t } = i18n.global;
  return [
    { label: t('notice'), value: 'notice' },
    { label: t('qna'), value: 'qna' },
    { label: t('community'), value: 'community' },
  ];
}

export function getCategoriesLabel(val) {
  const { t } = i18n.global;
  const item = getCategories().find(({ value }) => value === val);
  return item?.label || null;
}
