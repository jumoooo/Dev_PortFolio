<template>
  <!--해더-->
  <PortfolioHeader />
  <section id="containar">
    <section id="about">
      <PortfolioContents title="About">
        <template #body>
          <p>
            2022년부터 Front-End 개발을 하고 있는 김준모입니다.
            <br />
            마크업과 Vue.js를 이용한 Front-End 개발에 관해 관심이 많으며
            최근에는 flex와 크로스 브라우징, 반응형 웹과 사용자 인터랙션에도
            관심을 두고 있습니다.
            <br />
            주로 사용하는 언어는 HTML, CSS, JavaScript 입니다.
          </p>
          <q-btn class="btn-1" flat text-color="white" label="이력서 보러가기"
            ><q-icon name="arrow_forward" size="16px" />
          </q-btn>
        </template>
      </PortfolioContents>
    </section>
    <section id="carrer">
      <PortfolioContents title="Carrer">
        <template #body
          ><div class="carrers-wrap">
            <PortfolioFigure
              :image-link="'http://www.lisner.co.kr/theme/s007/img/logo-footer.png'"
              :alt="'리스너 로고'"
            />
          </div>
        </template>
      </PortfolioContents>
    </section>
    <section id="personal-activities">
      <PortfolioContents title="Personal Activities">
        <template #body>
          <div class="flex-wrap row q-col-gutter-md flex flex-center">
            <div class="col-4" v-for="n in 6" :key="`sm-${n}`">
              <div class="flip-container">
                <div class="flipper">
                  <div class="flip-box-front">
                    <img
                      class="front-img"
                      src="https://news.nateimg.co.kr/orgImg/ed/2024/10/30/PS24103001222.jpg"
                    />
                    <div class="front-title flex">
                      <p>Poke Card Interaction Page</p>
                      <strong>개인 프로젝트</strong>
                    </div>
                  </div>
                  <div class="flip-box-back">
                    <p class="text-h4 text-white">Back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </PortfolioContents>
    </section>
  </section>
</template>

<script setup>
import PortfolioHeader from './portfolio/PortfolioHeader.vue';
import PortfolioContents from './portfolio/PortfolioContents.vue';
import PortfolioFigure from './portfolio/PortfolioFigure.vue';
</script>

<style lang="scss" scoped>
p {
  color: #444444;
}
#containar {
  display: block;
  line-height: 1.8;
  max-width: 1140px !important;
  margin: 0 auto;
  section {
    margin-top: 60px;
  }
}
.btn-1 {
  background-color: #f58a94;
  transition: all 0.2s linear;
  -webkit-font-smoothing: antialiased; /* Chrome, Safari */
  -moz-osx-font-smoothing: grayscale; /* Firefox */
  transform: translateZ(0); /* 3D 변환을 사용하여 하드웨어 가속 강제 */
  backface-visibility: hidden; /* 일부 경우 깜빡임 방지 */
}
.btn-1:hover {
  transform: scale(1.1);
}
.carrers-wrap {
  height: 250px;
  width: 50%;
}
.carrer-figure {
  background-color: #222944;
  height: 100%;
  width: 100%;
  transition: all 0.2s linear;
  border-radius: 3px;
}
.carrer-figure:hover {
  transform: scale(1.1);
}
.flex-wrap {
  width: 100%;
  padding-bottom: 50px;
}
.flip-container {
  min-height: 300px;
  perspective: 1000px;
}
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
  // 개발 임시 주석중
  transform: rotateY(-180deg); /* Y축으로 -180도 회전 (우에서 좌로 뒤집기) */
}

.flip-box-front,
.flip-box-back {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 3px;

  position: absolute;
  -webkit-backface-visibility: hidden; /* 뒷면 요소가 보이지 않도록 숨김 */
  backface-visibility: hidden; /* 뒷면 요소가 보이지 않도록 숨김 */
}

.flip-box-front {
  // background-color: #fff;
  color: black;
}

.front-title {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 20px;

  flex-direction: column;
  z-index: 2;

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
  border-radius: 3px;
}

.flip-box-back {
  background-color: #222944; /* 뒷면의 배경색 */
  color: white;
  transform: rotateY(180deg); /* 뒷면을 미리 뒤집어 놓기 */
}
.text-center {
  text-align: center;
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

<route lang="yaml">
meta:
  layout: onlyHeaderLayout
  width: 100%
</route>
