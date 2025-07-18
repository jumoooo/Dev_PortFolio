<template>
  <!--해더-->
  <PortfolioMainTitle />
  <section class="section-containar" aria-label="portfolio contants containar">
    <section id="about" aria-label="portfolio about">
      <PortfolioContents title="About">
        <template #body>
          <p>
            {{ $t('message.1024') }}
            <!-- '2022년부터 Vue.js 기반의 SPA 개발을 중심으로 프론트엔드 경험을 쌓아온 김준모입니다.' -->
            <br />
            {{ $t('message.1025') }}
            <!-- '백엔드와는 Nest.js 및 MSSQL을 이용한 REST API 연동 경험이 있으며, 쿼리 최적화 및 유효성 검증 로직에도 이해를 갖고 있습니다.' -->
            <br />
            {{ $t('message.1025_1') }}
            <!-- '다양한 국가의 프로젝트 경험으로 다국어가 적용된 프로젝트 진행한 이력이 있습니다.' -->
            <br />
            {{ $t('message.1026') }}
            <!-- '현재는 컴포넌트 설계 개선과 접근성, 웹 성능 최적화에 관심을 두고 학습 중입니다.' -->
            <br />
            {{ $t('message.1026_1') }}
            <!-- '주로 사용하는 언어는 HTML, SCSS, JavaScript, MSSQL 입니다.' -->
          </p>
          <q-btn
            class="btn-notion"
            text-color="white"
            href="https://purple-paint-fa5.notion.site/1cb89dd2fd714917845c3410716b55d7"
          />
          <q-btn
            class="btn-github"
            text-color="white"
            href="https://github.com/jumoooo/Dev_PortFolio"
          />
          <!-- <q-btn class="btn-1" flat text-color="white" label="이력서 보러가기"
            ><q-icon name="arrow_forward" size="16px" />
          </q-btn> -->
        </template>
      </PortfolioContents>
    </section>
    <section id="carrer" aria-label="portfolio carrer">
      <PortfolioContents title="Carrer">
        <template #body
          ><div class="carrers-wrap">
            <router-link :to="'/carrer/lisner'" class="figure-link-wrapper">
              <PortfolioFigure
                :image-link="'/lisner_logo.jpg'"
                :alt="'Lisner logo'"
              />
            </router-link>
          </div>
        </template>
      </PortfolioContents>
    </section>
    <section
      id="personal-activities"
      aria-label="portfolio personal-activities"
    >
      <PortfolioContents title="Personal Activities">
        <template #body>
          <div class="flex-wrap row q-col-gutter-md flex flex-start">
            <div
              class="col-12 col-sm-4"
              v-for="(data, index) in detailData"
              :key="index"
            >
              <div class="flip-container">
                <Flipper>
                  <template #front>
                    <PortfolioCardPreview
                      :img-link="data['imgLink']"
                      :title="data['title']"
                      :category="data['category']"
                    />
                  </template>
                  <template #back>
                    <PortfolioCardDetail
                      :workDate="data['workDate']"
                      :title="data['title']"
                      :category="data['category']"
                      :detailContents="data['detailContents']"
                    />
                  </template>
                </Flipper>
              </div>
            </div>
          </div>
        </template>
      </PortfolioContents>
    </section>
  </section>
</template>

<script setup>
import PortfolioMainTitle from './portfolio/components/PortfolioMainTitle.vue';
import PortfolioContents from './portfolio/components/PortfolioContents.vue';
import PortfolioFigure from './portfolio/components/PortfolioFigure.vue';
import Flipper from './components/Flipper.vue';
import PortfolioCardPreview from './portfolio/components/PortfolioCardPreview.vue';
import PortfolioCardDetail from './portfolio/components/PortfolioCardDetail.vue';

import { ref } from 'vue';

let detailDatas = [
  {
    imgLink: '/assets/bulletin_board.jpg',
    workDate: '2025.03 ~ 06',
    title: 'Bulletin Board Page',
    category: 'message.1030', // 개인 프로젝트
    detailContents: [
      {
        id: 1,
        type: 'div',
        content: 'message.1027', // 게시판 형식의 페이지
      },
      {
        id: 2,
        type: 'div',
        content: 'message.1028', // 인프런 Vue 3 강좌 참고
      },
      {
        id: 3,
        type: 'div',
        content: 'Quasar, Vue3, Firebase, Algolia',
      },
      {
        id: 4,
        type: 'a',
        content: 'https://thehamo.com/',
      },
      {
        id: 4,
        type: 'a',
        content: 'https://github.com/jumoooo/Dev_PortFolio',
      },
    ],
  },
  {
    imgLink: '/assets/poke/pokeCard.jpg',
    workDate: 'message.1029', // 2025.04 ~ 현재
    title: 'Poke Card Interaction Page',
    category: 'message.1030', // 개인 프로젝트
    detailContents: [
      {
        id: 1,
        type: 'div',
        content: 'message.1031', // 포켓몬 TCG API 활용
      },
      {
        id: 2,
        type: 'div',
        content: 'message.1032', // 인터렉션 연습 페이지
      },
      {
        id: 3,
        type: 'a',
        content: 'https://thehamo.com/pokeCardPage',
      },
    ],
  },
];
const detailData = ref(detailDatas);
</script>

<style lang="scss" scoped>
$primary-text-color: #444444;
$accent-color: #f58a94; // btn-1 배경색
$dark-bg-color: #222944; // flip-box-back 배경색, carrer-figure 배경색

p,
div,
strong {
  color: $primary-text-color;
}
.section-containar {
  display: block;
  line-height: 1.8;
  max-width: 1140px !important;
  margin: 0 auto;
  section {
    margin-top: 60px;
  }
}
.btn-github,
.btn-notion {
  margin-top: 10px;
  min-width: 50px;
  min-height: 50px;
}
.btn-notion {
  background-image: url(/icons/notion.svg);
}
.btn-github {
  background-image: url(/icons/github.svg);
  margin-left: 10px;
}
.btn-1 {
  background-color: $accent-color;
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
  background-color: $dark-bg-color;
  height: 100%;
  width: 100%;
  transition: all 0.2s linear;
  border-radius: 3px;

  -webkit-font-smoothing: antialiased; /* Chrome, Safari */
  -moz-osx-font-smoothing: grayscale; /* Firefox */
  transform: translateZ(0); /* 3D 변환을 사용하여 하드웨어 가속 강제 */
  backface-visibility: hidden; /* 일부 경우 깜빡임 방지 */
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

.figure-link-wrapper {
  display: block; /* router-link가 figure의 공간을 완전히 차지하도록 */
  height: 100%;
  width: 100%;
  text-decoration: none; /* 링크의 밑줄 제거 */
  color: inherit; /* 링크 색상 상속 */
}

@media (max-width: 786px) {
  .section-containar {
    padding: 0 10px;
  }
}
</style>

<route lang="yaml">
meta:
  layout: hiLayout
  width: 100%
</route>
