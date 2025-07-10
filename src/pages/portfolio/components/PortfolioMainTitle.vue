<template>
  <div class="protfolio-header">
    <div class="title-text">
      <h1>김준모</h1>
      <h2>
        <q-icon size="sm" color="#1f1f1f" name="email" class="q-mr-sm" />
        <span> rnsdlsdmltk@gmail.com </span>
      </h2>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.protfolio-header {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-image: linear-gradient(
      to top left,
      rgb(201, 110, 149, 0.7),
      rgb(243, 221, 208, 0.8)
    ),
    url('/portfolio_title_backimg.svg'); // SVG 배경 이미지
}
.title-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 64px;
    margin: 0;
  }

  h2 {
    // font-size: 30px;
    font-size: 1.8rem;
    text-align: center;
  }
}
</style>
