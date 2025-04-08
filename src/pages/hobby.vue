<template>
  <q-page padding>
    <div class="text-h2">Hobby</div>
    <div class="container">
      <div class="overlay"></div>
      <div class="card"></div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  const container = document.querySelector('.container');
  const overlay = document.querySelector('.overlay');
  // 초기 중앙 위치 세팅

  // 마우스 없을 때 중앙에서 시작

  container.addEventListener('mousemove', e => {
    const x = e.offsetX;
    const y = e.offsetY;

    // const cardAngle = {
    //   x: (-1 / 5) * x + 20,
    //   y: (4 / 33) * y - 20,
    // };
    const cardAngle = {
      x: angleFrom(x, {
        sizeMin: 0,
        sizeMax: 220,
        angleMin: -20,
        angleMax: 20,
      }),
      y: angleFrom(y, {
        sizeMin: 0,
        sizeMax: 310,
        angleMin: 20,
        angleMax: -20,
      }),
    };
    const overlayPosition = {
      x: x - 90,
      y: y - 90,
    };

    overlay.style.opacity = '1';
    overlay.style.backgroundPosition = `${overlayPosition.x}px ${overlayPosition.y}px`;
    container.style.transform = `perspective(340px) rotateY(${cardAngle.x}deg) rotateX(${cardAngle.y}deg)`;
  });

  container.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
    container.style.transform = `perspective(350px) rotateY(0deg) rotateX(0deg)`;
  });
});
const angleFrom = (
  y,
  { sizeMin = 0, sizeMax = 0, angleMin = 0, angleMax = 0 },
) => {
  const ratio = (y - sizeMin) / (sizeMax - sizeMin);
  return angleMax + (angleMin - angleMax) * ratio;
};
</script>

<style lang="scss" scoped>
.container {
  width: 220px;
  height: 310px;
  transition: all 0.1s;
}
.overlay {
  border-radius: 9px;
  position: absolute;
  width: 220px;
  height: 310px;
  pointer-events: none;

  // 흐릿한 빛 느낌 (형체 안 보이게)
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );

  background-repeat: no-repeat;
  background-size: 180px 180px;
  background-position: 50% 50%;
}

.card {
  border-radius: 9px;
  width: 220px;
  height: 310px;
  background-image: url('https://images.pokemontcg.io/swsh12pt5/160_hires.png');
  background-size: cover;
  box-shadow: 0px 5px 15px black;
}
</style>
