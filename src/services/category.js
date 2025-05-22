const categories = [
  { label: 'Q&A', value: 'qna' },
  { label: '커뮤니티', value: 'community' },
  { label: '공지사항', value: 'notice' },
];

export function getCategories() {
  return categories;
}

export function getCategoriesLabel(val) {
  const result = categories.find(({ label, value }) => value === val);
  return result?.label;
}
