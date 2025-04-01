export const useTag = options => {
  const { tags, updateTags, maxLengthMessage } = options || {};

  const addTag = newTag => {
    const isEventHandelr = typeof newTag !== 'string';
    const tagValue = isEventHandelr
      ? newTag.target.value.replace(/ /g, '')
      : newTag.replace(/ /g, '');
    if (!tagValue) {
      return;
    }
    if (tags.value.length >= 10) {
      $q.notify(maxLengthMessage);
    }
    if (tags.value.includes(tagValue) == false) {
      // emit('update:tags', [...props.tags, tagValue]);
      updateTags([...tags.value, tagValue]);
    }
    if (isEventHandelr) {
      newTag.target.value = '';
    }
  };
  const removeTag = index => {
    const model = [...tags.value];
    model.splice(index, 1);
    // emit('update:tags', model);
    updateTags(model);
  };
  return {
    addTag,
    removeTag,
  };
};
