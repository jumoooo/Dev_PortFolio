<template>
  <div class="container flex items-center justify-center" ref="containerRef">
    <div class="relative-wrapper q-my-md">
      <div
        class="overlay"
        ref="overlayRef"
        :style="{
          width: cardStyle.width,
          height: cardStyle.height,
        }"
      ></div>
      <div class="card" :style="cardStyle"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { onMounted } from 'vue';

const containerRef = ref(null);
const overlayRef = ref(null);

const props = defineProps({
  imageUrl: {
    type: String,
  },
  width: {
    type: [String, Number],
    default: 190,
  },
  height: {
    type: [String, Number],
    default: 280,
  },
  borderRadius: {
    type: [String, Number],
    default: 9,
  },
});

const convertString = val => {
  if (typeof val == 'number') {
    return val + 'px';
  }
  return val;
};

const cardStyle = computed(() => ({
  backgroundImage: `url(${props.imageUrl})`,
  width: convertString(props.width),
  height: convertString(props.height),
  borderRadius: convertString(props.borderRadius),
}));

onMounted(() => {
  const container = containerRef.value;
  const overlay = overlayRef.value;
  // 초기 중앙 위치 세팅

  // 마우스 없을 때 중앙에서 시작
  container.addEventListener('mousemove', e => {
    const x = e.offsetX;
    const y = e.offsetY;

    const cardAngle = {
      x: angleFrom(x, {
        sizeMin: 0,
        sizeMax: props.width,
        angleMin: -20,
        angleMax: 20,
      }),
      y: angleFrom(y, {
        sizeMin: 0,
        sizeMax: props.height,
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

// 현재값을 기준으로 angleMin ~ angleMax 사이의 각도를 계산해주는 함수
// 이미지 등 콘텐츠 회전시킬때 사용
const angleFrom = (
  currentValue, // 현재값 (예: 현재 높이값)
  {
    sizeMin = 0, // 입력 범위의 최소값
    sizeMax = 0, // 입력 범위의 최대값
    angleMin = 0, // 출력 각도 범위의 최소값
    angleMax = 0, // 출력 각도 범위의 최대값
  },
) => {
  // currentValue가 sizeMin ~ sizeMax 사이에서 몇 퍼센트에 해당하는지 계산 (0 ~ 1 사이 비율)
  const ratio = (currentValue - sizeMin) / (sizeMax - sizeMin);

  // 해당 비율을 angleMax ~ angleMin 범위로 선형 변환
  // angle이 줄어드는 방향일 수 있으므로 angleMin - angleMax를 곱함
  // 출력값 = 시작값 + (끝값 - 시작값) * 비율
  return angleMax + (angleMin - angleMax) * ratio;
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%; // 이게 중요함 (또는 100vh)
  transition: all 0.1s;
}
.overlay {
  border-radius: 9px;
  position: absolute;
  // width: 220px;
  // height: 310px;
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

  // position: absolute;
  top: 0;
  left: 0;
}

.card {
  border-radius: 9px;
  // width: 220px;
  // height: 310px;
  // background-size: cover;
  background-size: 100% 100%;
  box-shadow: 0px 5px 15px black;
}
.relative-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
