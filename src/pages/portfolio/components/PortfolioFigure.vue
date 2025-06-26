<!-- 로고 및 이미지 링크 -->
<template>
  <q-btn class="custom-figure flex flex-center" @click="btnClick">
    <img :src="imageLink" :alt="alt" />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </q-btn>
</template>

<script setup>
import { useRouter } from 'vue-router';

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
const router = useRouter();
const btnClick = () => {
  console.log('버튼 클릭 !');
  router.push('/portfolio/carrer/lisner');
};
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
