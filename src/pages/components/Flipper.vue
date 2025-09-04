<template>
  <div class="flipper">
    <div class="flip-box-front">
      <slot name="front"> </slot>
    </div>
    <div class="flip-box-back">
      <slot name="back"> </slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.flipper {
  width: 100%;
  height: 100%;
  min-height: 300px;
  border-radius: 3px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.3);
  text-align: center;

  transform-style: preserve-3d;
  transition: transform 0.5s ease 0.25s, -webkit-transform 0.5s ease 0.25s;
}

/* 마우스 오버 시 뒤집기 */
.flip-container:hover .flipper {
  transform: rotateY(-180deg);
}

.flip-box-front,
.flip-box-back {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;

  position: absolute;
  -webkit-backface-visibility: hidden; /* 뒷면 요소가 보이지 않도록 숨김 */
  backface-visibility: hidden; /* 뒷면 요소가 보이지 않도록 숨김 */
}

.flip-box-front {
  color: black;
  justify-content: center;
  // transform: rotateY(180deg);
  transform: rotateY(0deg);
}
.flip-box-back {
  transform: rotateY(180deg);
  // transform: rotateY(0deg);
  .detail-content {
    flex-direction: column;
    div {
      display: flex;
    }
  }
}
</style>
