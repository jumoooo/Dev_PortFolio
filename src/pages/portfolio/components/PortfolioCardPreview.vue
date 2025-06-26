<template>
  <img class="front-img" :src="imgLink" />
  <div class="front-title flex">
    <p>{{ title }}</p>
    <strong>{{ category }}</strong>
  </div>
</template>

<script setup>
defineProps({
  imgLink: {
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
});
</script>

<style lang="scss" scoped>
.front-title {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;

  flex-direction: column;
  z-index: 2;
  transform: rotateY(0deg);

  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #e5e5e5f3);

  strong,
  p {
    text-align: left;
    // line-height: 1.2;
    font-size: 16px;
    margin: 0;
  }
}
.front-img {
  width: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}

@media (max-width: 786px) {
  .front-img {
    padding-bottom: 40px;
  }
  .front-title {
    justify-content: center !important;
    strong,
    p {
      font-size: 12px !important;
    }
  }
}
</style>
