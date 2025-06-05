<template>
  <div
    class="card-container"
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="resetCard"
  >
    <div class="card" :style="cardStyle">
      <div class="overlay" ref="overlayRef"></div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';

const cardRef = ref(null);
const overlayRef = ref(null);

const props = defineProps({
  imageUrl: String,
  width: { type: [String, Number], default: 190 },
  height: { type: [String, Number], default: 280 },
  borderRadius: { type: [String, Number], default: 9 },
});
const px = val =>
  typeof val === 'number'
    ? `${val}px`
    : val.toString().includes('%') ||
      val.toString().includes('vw') ||
      val.toString().includes('vh')
    ? val
    : `${val}`;

const cardStyle = computed(() => ({
  backgroundImage: `url(${props.imageUrl})`,
  width: px(props.width),
  height: px(props.height),
  borderRadius: px(props.borderRadius),
  backgroundSize: '100% 100%',
}));

// const rect = cardRef.value.getBoundingClientRect();
// if (rect.width > rect.height) {
//   const lowe = (rect.width * 280) / 190;
// }

// 기울기 계산 함수
const angleFrom = (value, min, max, aMin, aMax) => {
  const ratio = (value - min) / (max - min);
  return aMax + (aMin - aMax) * ratio;
};

// 마우스 무브
const handleMouseMove = e => {
  const rect = cardRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = angleFrom(y, 0, rect.height, 20, -20);
  const rotateY = angleFrom(x, 0, rect.width, -20, 20);

  cardRef.value.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  overlayRef.value.style.opacity = '1';
  overlayRef.value.style.backgroundPosition = `${x - 90}px ${y - 90}px`;
};

const resetCard = () => {
  cardRef.value.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg)`;
  overlayRef.value.style.opacity = '0';
};
onMounted(() => {
  const rect = cardRef.value.getBoundingClientRect();
  console.log('rect.width', rect.width);
  console.log('rect.height', rect.height);
});
</script>
<style scoped>
.card-container {
  transition: transform 0.15s ease-out;
  will-change: transform;
  width: fit-content;
  height: fit-content;
  perspective: 600px;
}

.card {
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-radius: inherit;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: inherit;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background-repeat: no-repeat;
  background-size: 180px 180px;
  background-position: 50% 50%;
  opacity: 0;
  transition: opacity 0.15s ease-out;
}
</style>
