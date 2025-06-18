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
            <figure class="carrer-figure flex flex-center">
              <img
                src="http://www.lisner.co.kr/theme/s007/img/logo-footer.png"
                alt="리스너 로고"
              />
            </figure>
          </div>
        </template>
      </PortfolioContents>
    </section>
    <section id="personal-activities">
      <PortfolioContents title="Personal Activities">
        <template #body> </template>
      </PortfolioContents>
    </section>
  </section>
</template>

<script setup>
import PortfolioHeader from './portfolio/PortfolioHeader.vue';
import PortfolioContents from './portfolio/PortfolioContents.vue';
</script>

<style lang="scss" scoped>
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
}
p {
  color: #444444;
}
</style>

<route lang="yaml">
meta:
  layout: onlyHeaderLayout
  width: 100%
</route>
