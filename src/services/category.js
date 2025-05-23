const categories = [
  { label: 'qna', value: 'qna' },
  { label: 'community', value: 'community' },
  { label: 'notice', value: 'notice' },
];

export function getCategories() {
  return categories;
}

export function getCategoriesLabel(val) {
  const result = categories.find(({ label, value }) => value === val);
  return result?.label;
}
