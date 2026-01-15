<!-- 로고 및 이미지 링크 -->
<template>
  <figure class="custom-figure flex flex-center">
    <!-- Native lazy loading 적용 (성능 최적화) -->
    <img :src="imageLink" :alt="alt" loading="lazy" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup>
defineProps({
  imageLink: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  caption: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.custom-figure {
  background-color: #222944;
  height: 100%;
  width: 100%;
  transition: all 0.2s linear;
  border-radius: 3px;

  cursor: pointer;
}
.custom-figure:hover {
  transform: scale(1.1);
}

@media (max-width: 786px) {
  .custom-figure:hover {
    transform: scale(1.025);
  }
}
</style>
