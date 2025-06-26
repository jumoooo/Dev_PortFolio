<template>
  <div class="col">
    <h1>
      <span>{{ props.title }}</span>
    </h1>
    <slot name="body"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    default: 'Title',
    type: String,
  },
});
</script>

<style lang="scss" scoped>
h1 {
  margin: 0px 0px 15px;
  font-size: 36px;
  color: #444444;
  // font-weight: bold;
  span {
    border-bottom: 5px solid #444;
  }
}
</style>
