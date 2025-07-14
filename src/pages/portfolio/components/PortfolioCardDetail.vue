<template>
  <p>{{ $t(workDate) }}</p>
  <p>{{ $t(title) }}</p>
  <strong class="catagory">{{ $t(category) }}</strong>
  <div class="detail-content">
    <template v-for="content in detailContents" :key="content.id">
      <div class="detail-item-wrapper">
        <span v-if="content['type'] == 'div'" class="before-hyphen">{{
          $t(content['content'])
        }}</span>
        <a
          v-else-if="content['type'] == 'a'"
          class="before-hyphen"
          :href="content['content']"
          target="_blank"
          >{{ $t(content['content']) }}</a
        >
      </div>
    </template>
  </div>
</template>

<script setup>
defineProps({
  workDate: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  detailContents: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.detail-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 250px;
  overflow-y: auto;
  padding-right: 5px;
  box-sizing: border-box;
}
.detail-item-wrapper {
  width: 100%;
  text-align: left;
}

@media (max-width: 786px) {
}
</style>
