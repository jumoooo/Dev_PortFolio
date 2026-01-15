<template>
  <!-- 헤더 배너 -->
  <section class="section-intro">
    <div class="intro-overlay">
      <div class="intro-content">
        <h1 class="intro-title">Lisner</h1>
        <p class="intro-subtitle">Smart Factory Solutions</p>
      </div>
    </div>
  </section>

  <!-- 메인 컨텐츠 -->
  <section class="section-container">
    <section class="section-info">
      <!-- 회사 소개 카드 -->
      <BaseCard class="info-card fade-in">
        <q-card-section>
          <div class="card-header">
            <q-icon name="business" size="32px" color="primary" />
            <h1 class="card-title">
              {{ $t('message.1033') }}
            </h1>
          </div>
          <p class="card-description">
            {{ $t('message.1034') }}
          </p>
        </q-card-section>
      </BaseCard>

      <!-- Cleber.WEB 서비스 & 프로젝트 -->
      <div class="service-group fade-in">
        <div class="section-header">
          <q-icon name="web" size="32px" color="primary" />
          <h1 class="section-title">Cleber.WEB</h1>
        </div>

        <!-- WEB 서비스 설명 -->
        <BaseCard class="service-card">
          <q-card-section>
            <div class="service-description">
              <p>
                <q-icon name="check_circle" size="18px" color="positive" />
                {{ $t('message.1038') }}
              </p>
              <p>
                <q-icon name="check_circle" size="18px" color="positive" />
                {{ $t('message.1039') }}
              </p>
            </div>
            <div class="tech-stack">
              <div class="stack-header">
                <q-icon name="code" size="20px" />
                <h3>Tech Stack</h3>
              </div>
              <div class="stack-chips">
                <q-chip color="primary" text-color="white" icon="javascript">
                  Vue.js
                </q-chip>
                <q-chip color="primary" text-color="white" icon="table_chart">
                  Wijmo
                </q-chip>
                <q-chip color="secondary" text-color="white" icon="web">
                  Nest.js
                </q-chip>
                <q-chip color="accent" text-color="white" icon="code">
                  TypeScript
                </q-chip>
                <q-chip color="secondary" text-color="white" icon="storage">
                  MSSQL
                </q-chip>
              </div>
            </div>
          </q-card-section>
        </BaseCard>

        <!-- WEB 프로젝트 -->
        <div class="project-section">
          <h2 class="project-subtitle">
            <q-icon name="folder_open" size="20px" />
            {{ $t('message.1040') }}
          </h2>
          <q-card class="project-card">
            <CustomTabs
              :mainTabs="webMainTabs"
              :mainDefault="'web'"
              :subTabs="webSubTabs"
              @clickImage="clickImage"
            />
          </q-card>
        </div>
      </div>

      <!-- Cleber.MES 서비스 & 프로젝트 -->
      <div class="service-group fade-in">
        <div class="section-header">
          <q-icon name="precision_manufacturing" size="32px" color="primary" />
          <h1 class="section-title">Cleber.MES</h1>
        </div>

        <!-- MES 서비스 설명 -->
        <BaseCard class="service-card">
          <q-card-section>
            <div class="service-description">
              <p>
                <q-icon name="check_circle" size="18px" color="positive" />
                {{ $t('message.1036') }}
              </p>
              <p>
                <q-icon name="check_circle" size="18px" color="positive" />
                {{ $t('message.1037') }}
              </p>
            </div>
            <div class="tech-stack">
              <div class="stack-header">
                <q-icon name="code" size="20px" />
                <h3>Tech Stack</h3>
              </div>
              <div class="stack-chips">
                <q-chip color="primary" text-color="white" icon="language">
                  C#
                </q-chip>
                <q-chip color="secondary" text-color="white" icon="storage">
                  MSSQL
                </q-chip>
              </div>
            </div>
          </q-card-section>
        </BaseCard>

        <!-- MES 프로젝트 -->
        <div class="project-section">
          <h2 class="project-subtitle">
            <q-icon name="folder_open" size="20px" />
            {{ $t('message.1040') }}
          </h2>
          <q-card class="project-card">
            <CustomTabs
              :mainTabs="mesMainTabs"
              :mainDefault="'mes'"
              :subTabs="mesSubTabs"
              @clickImage="clickImage"
            />
          </q-card>
        </div>
      </div>
    </section>
  </section>

  <!-- 이미지 다이얼로그 -->
  <q-dialog v-model="isClickImage" v-if="!isMobileScreen">
    <q-card class="dialog-card">
      <q-card-section class="dialog-content">
        <q-btn icon="close" flat round dense class="close-btn" v-close-popup />
        <img class="dialog-img" :src="selectedImgLink" alt="Project Image" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import CustomTabs from 'src/pages/components/CustomTabs.vue';
import { useQuasar } from 'quasar';
import { computed, ref, watch } from 'vue';

const $q = useQuasar();

// WEB 프로젝트 데이터
const webMainTabs = [{ name: 'web', title: 'Cleber.WEB' }];
const webSubTabs = [
  {
    mainName: 'web',
    tabList: [
      {
        title: 'message.1055', // 동우 화인캠 레포트 재구축
        content: [
          'message.1042', // 기여도 : 20%
          'message.1056', // 폐쇠망
          'message.1057', // MES 개발 된 대시보드를 WEB 으로 기능이관 작업 진행
        ],
        isImg: false,
        imgs: [],
      },
      {
        title: 'message.1058', // INFAC SCM 구축 및 개발
        content: [
          'message.1059', // 기여도 : 100%, 단독진행
          'message.1060', // 북미, 폴란드 각 사이트에 구축 및 개발
          'message.1061', // 기존의 대시보드 기능만 하던 Cleber.WEB 에 SCM 기능 추가
          'message.1062', // DB 테이블 설계, 백엔드 및 프론트엔드 구현, 코어 기능 수정까지 직접 수행
          'message.1063', // 실시간 데이터 관리 및 납품 기능을 강화하고, 고객사의 요구사항을 반영한 맞춤형 기능 추가.
          'message.1064', // 현재 약 120개의 현대모비스 계열 납품처 고객사에서 사용 중이며, 업무 자동화로 인해 납품 관련 데이터 입력 시간이 단축, 데이터 입력 오류율이 감소함.
          'message.1065', // 추가 stack : ZPL(제브라 프린트 언어) 사용
        ],
        isImg: true,
        imgs: [
          {
            imgTitle: 'message.1066', // SCM 발주 확인 페이지
            imgLink: '/assets/lisner/lisner_web_infac_01.jpg',
          },
          {
            imgTitle: 'message.1067', // SCM 납품 등록 페이지
            imgLink: '/assets/lisner/lisner_web_infac_02.jpg',
          },
          {
            imgTitle: 'message.1068', // SCM 납품 정보 관리 페이지
            imgLink: '/assets/lisner/lisner_web_infac_03.jpg',
          },
          {
            imgTitle: 'message.1069', // SCM BOX 라벨 등록 페이지
            imgLink: '/assets/lisner/lisner_web_infac_04.jpg',
          },
          {
            imgTitle: 'message.1070', // SCM PALLET 라벨 등록 페이지
            imgLink: '/assets/lisner/lisner_web_infac_05.jpg',
          },
        ],
      },
      {
        title: 'message.1071', // NVH 대시보드 구축 및 개발
        content: [
          'message.1059', // 기여도 : 100%, 단독진행
          'message.1073', // 북미 사이트에 원격으로 구축 및 화면 개발
          'message.1074', // 북미팀과 협업하여 MES 개발 지원 진행
        ],
        isImg: true,
        imgs: [
          {
            imgTitle: 'message.1075', // NVH 대시보드
            imgLink: '/assets/lisner/lisner_web_nvh_01.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_02.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_03.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_04.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_05.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_06.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_nvh_07.jpg',
          },
        ],
      },
      {
        title: 'message.1076', // EcoPro 대시보드 서버 구축 및 개발
        content: ['message.1072', 'message.1056', 'message.1077'],
        // '기여도 : 80%', '폐쇄망', '디자이너와 협업(Zeplin 사용)'
        isImg: false,
        imgs: [
          {
            imgTitle: 'message.1078', // EcoPro 대시보드
            imgLink: '/assets/lisner/lisner_web_eco_01.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_eco_02.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_eco_03.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_eco_04.jpg',
          },
          {
            imgTitle: '',
            imgLink: '/assets/lisner/lisner_web_eco_05.jpg',
          },
        ],
      },
    ],
  },
];

// MES 프로젝트 데이터
const mesMainTabs = [{ name: 'mes', title: 'Cleber.MES' }];
const mesSubTabs = [
  {
    mainName: 'mes',
    tabList: [
      {
        title: 'message.1041', // 창성 MES 구축
        content: [
          'message.1042', // 기여도 : 20%
          'message.1043', // 창성 평택으로 파견
          'message.1044', // [자재 투입] 등 공정 화면 개발 및 현장 교육 진행
        ],
        isImg: false,
        imgs: [],
      },
      {
        title: 'message.1045', // INPAC MES 개발
        content: [
          'message.1042', // 기여도 : 20%
          'message.1046', // 본사에서 원격으로 진행
          'message.1047', // 북미, 폴란드 팀과 협업하여 MES 개발 지원 진행
          'message.1048',
          // [자재 출하], [입하], [입고] 등 SCM 과 관련된 자재 이동 공정, 모니터링 화면 개발
        ],
        isImg: true,
        imgs: [
          {
            imgTitle: 'message.1049', // 발주 페이지
            imgLink: '/assets/lisner/lisner_mes_01.jpg',
          },
          {
            imgTitle: 'message.1050', // 입하 페이지
            imgLink: '/assets/lisner/lisner_mes_02.jpg',
          },
          {
            imgTitle: 'message.1051', // 입고 페이지
            imgLink: '/assets/lisner/lisner_mes_03.jpg',
          },
        ],
      },
      {
        title: 'message.1052', // NVH MES 개발
        content: [
          'message.1042', // 기여도 : 20%
          'message.1046', // 본사에서 원격으로 진행
          'message.1047', // 북미팀과 협업하여 MES 개발 지원 진행
          'message.1048',
          // [자재 출하], [입하], [입고] 등 MES 자재 이동 공정, 모니터링 화면 개발
        ],
        isImg: false,
        imgs: [],
      },
    ],
  },
];

const isClickImage = ref(false);
const selectedImgLink = ref('');
const clickImage = imgLink => {
  selectedImgLink.value = imgLink;
  isClickImage.value = true;
};
const isMobileScreen = computed(() => $q.screen.lt.md);

watch(isMobileScreen, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    isClickImage.value = false;
    selectedImgLink.value = '';
  }
});
</script>

<style lang="scss" scoped>
// 애니메이션 정의
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}

// 헤더 배너
.section-intro {
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #1976d2 0%, #26a69a 50%, #1976d2 100%);
  overflow: hidden;

  .intro-overlay {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.05); // 미세한 어두운 오버레이
  }

  .intro-content {
    text-align: center;
    color: white;
    z-index: 1;

    .intro-title {
      font-size: 56px;
      font-weight: 700;
      margin: 0 0 16px 0;
      text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
      letter-spacing: 4px;
    }

    .intro-subtitle {
      font-size: 24px;
      font-weight: 300;
      margin: 0;
      opacity: 0.95;
      letter-spacing: 2px;
      text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
    }
  }
}

// 메인 컨테이너
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px; // 여백 증가
  line-height: 1.8;
}

.section-info {
  display: flex;
  flex-direction: column;
  gap: 50px; // 여백 증가
}

// 카드 헤더
.card-header,
.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px; // 여백 증가
}

.card-title,
.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #1976d2;
  margin: 0;
}

// 회사 소개 카드
.info-card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
  }

  .card-description {
    font-size: 18px;
    color: #555;
    line-height: 1.8;
    margin: 0;
  }
}

// 서비스 그룹
.service-group {
  display: flex;
  flex-direction: column;
  gap: 32px; // 여백 증가
  padding: 40px; // 여백 증가
  padding-bottom: 48px; // 하단 여백 증가
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  border: 1px solid #e9ecef;
}

.service-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border-left: 4px solid transparent;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-left-color: #26a69a;
    transform: translateX(4px);
  }
}

.service-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.service-title {
  font-size: 26px;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.service-description {
  display: flex;
  flex-direction: column;
  gap: 14px; // 여백 증가
  margin-bottom: 28px; // 여백 증가

  p {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 16px;
    color: #555;
    margin: 0;
    line-height: 1.6;

    .q-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
}

// 기술 스택
.tech-stack {
  background: linear-gradient(135deg, #f5f7fa 0%, #f0f4f8 100%);
  padding: 20px;
  border-radius: 8px;
  margin-top: 8px;
}

.stack-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .q-chip {
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

// 프로젝트 섹션
.project-section {
  margin-top: 20px; // 여백 증가
  margin-bottom: 0;
}

.project-subtitle {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0; // 여백 증가
}

.project-card {
  height: 600px; // 높이 줄임
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  border: 1px solid #e9ecef;

  &:hover {
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  }
}

// 다이얼로그
.dialog-card {
  max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px);
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
}

.dialog-content {
  position: relative;
  padding: 20px;

  .close-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 1;
    background: rgba(0, 0, 0, 0.5);
    color: white;

    &:hover {
      background: rgba(0, 0, 0, 0.7);
    }
  }
}

.dialog-img {
  max-width: 100%;
  max-height: calc(100vh - 100px);
  object-fit: contain;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

// 반응형
@media (max-width: 1024px) {
  .section-intro {
    height: 320px;

    .intro-title {
      font-size: 48px;
    }

    .intro-subtitle {
      font-size: 20px;
    }
  }

  .card-title,
  .section-title {
    font-size: 28px;
  }

  .service-title {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .section-container {
    padding: 50px 20px; // 여백 증가
  }

  .section-intro {
    height: 280px;

    .intro-title {
      font-size: 40px;
    }

    .intro-subtitle {
      font-size: 18px;
    }
  }

  .card-title,
  .section-title {
    font-size: 24px;
  }

  .service-title {
    font-size: 22px;
  }

  .info-card .card-description {
    font-size: 16px;
  }

  .service-description p {
    font-size: 15px;
  }

  .project-card {
    height: 550px;
  }

  .stack-chips .q-chip {
    font-size: 12px;
  }

  .service-group {
    padding: 28px 20px; // 여백 증가
    padding-bottom: 36px; // 여백 증가
  }

  .section-info {
    gap: 40px;
  }
}

@media (max-width: 480px) {
  .section-container {
    padding: 40px 16px; // 여백 증가
  }

  .section-intro {
    height: 240px;

    .intro-title {
      font-size: 32px;
    }

    .intro-subtitle {
      font-size: 16px;
    }
  }

  .card-title,
  .section-title {
    font-size: 22px;
  }

  .service-title {
    font-size: 20px;
  }

  .section-info {
    gap: 35px; // 여백 증가
  }

  .services-section {
    gap: 24px; // 여백 증가
  }

  .project-card {
    height: 500px;
  }

  .service-group {
    padding: 24px 16px; // 여백 증가
    padding-bottom: 28px; // 여백 증가
    gap: 24px; // 여백 증가
  }
}
</style>

<route lang="yaml">
meta:
  layout: hiLayout
  width: 100%
</route>
