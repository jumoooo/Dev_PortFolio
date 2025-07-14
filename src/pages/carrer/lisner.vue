<template>
  <section class="section-intro"></section>
  <section class="section-containar">
    <section class="section-info">
      <div class="introduction">
        <h1>
          {{ $t('message.1033') }}
          <!-- 회사 소개 -->
        </h1>
        <p>
          {{ $t('message.1034') }}
          <!-- Smart Factory 솔루션 공급, 컨설팅, 시스템 구축, 운영관리를 서비스 중인
          중소기업 -->
        </p>
        <br />
      </div>
      <div class="service">
        <h1>
          {{ $t('message.1035') }}
          <!-- 서비스 -->
        </h1>
        <h2>Cleber.MES</h2>
        <p>
          - {{ $t('message.1036') }}
          <!-- 실시간 데이터를 기반으로 제조현장을 모니터링하고 공정, 제조를 관리
          하는 스마트 팩토리 프레임워크 -->
        </p>
        <p>
          - {{ $t('message.1037') }}
          <!-- 정확한 실시간 데이터를 기반으로 공장 운영현황 및 공장활동 지시 수행 -->
        </p>
        <h3>- stack</h3>
        <ul>
          <li>Common : C#</li>
          <li>DB : MSSQL</li>
        </ul>
        <br />
        <h2>Cleber.WEB</h2>
        <p>
          - {{ $t('message.1038') }}
          <!-- WEB 기반 스마트 팩토리 프레임워크 -->
        </p>
        <p>
          - {{ $t('message.1039') }}
          <!-- SCM 솔루션 (자재 발주 요청, 완재품 출하 관련) -->
        </p>

        <h3>- stack</h3>
        <ul>
          <li>Front-end : Vue.js, Wijmo, SCSS, HTML5</li>
          <li>Back-end : Nest.js, TypeORM</li>
          <li>Common : TypeScript</li>
          <li>DB : MSSQL</li>
        </ul>
      </div>
      <div class="tab-warp">
        <h1>
          {{ $t('message.1040') }}
          <!-- 프로젝트 -->
        </h1>
        <q-card>
          <CustomTabs
            :mainTabs="mainTabs"
            :mainDefault="mainDefault"
            :subTabs="subTabs"
            @clickImage="clickImage"
          />
          <!-- <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
          >
            <q-tab name="mes" label="Cleber.MES" class="text-capitalize" />
            <q-tab name="web" label="Cleber.WEB" class="text-capitalize" />
          </q-tabs>
          <q-separator />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="mes" class="q-pa-none">
              <q-splitter v-model="splitterModel" :horizontal="isMobileScreen">
                <template v-slot:before>
                  <q-tabs
                    v-model="innerTab_Mes"
                    :vertical="!isMobileScreen"
                    class="text-teal"
                  >
                    <q-tab
                      name="mes_1"
                      icon="description"
                      label="창성 MES 구축"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                    <q-tab
                      name="mes_2"
                      icon="description"
                      label="INPAC MES 개발"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                    <q-tab
                      name="mes_3"
                      icon="description"
                      label="NVH MES 개발"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="innerTab_Mes"
                    animated
                    :vertical="!isMobileScreen"
                  >
                    <q-tab-panel name="mes_1">
                      <h1 class="text-h4 q-mb-md">창성 MES 구축 및 개발</h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 20%</p>
                      <p>- 창성 평택으로 파견</p>
                      <p>- [자재 투입] 등 공정 화면 개발 및 현장 교육 진행</p>
                      <p>* 보안상 이미지를 참조할 수 없습니다.</p>
                    </q-tab-panel>
                    <q-tab-panel name="mes_2">
                      <h1 class="text-h4 q-mb-md">INPAC MES 개발</h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 20%</p>
                      <p>- 본사에서 원격으로 진행</p>
                      <p>- 북미, 폴란드 팀과 협업하여 MES 개발 지원 진행</p>
                      <p>
                        - [자재 출하], [입하], [입고] 등 'SCM' 과 관련된 자재
                        이동 공정, 모니터링 화면 개발
                      </p>
                      <h2>발주 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_mes_01.jpg'"
                      />
                      <h2>입하 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_mes_02.jpg'"
                      />
                      <h2>입고 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_mes_03.jpg'"
                      />
                    </q-tab-panel>
                    <q-tab-panel name="mes_3">
                      <h1 class="text-h4 q-mb-md">NVH MES 개발</h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 20%</p>
                      <p>- 본사에서 원격으로 진행</p>
                      <p>- 북미팀과 협업하여 MES 개발 지원 진행</p>
                      <p>
                        - [자재 출하], [입하], [입고] 등 MES 자재 이동 공정,
                        모니터링 화면 개발
                      </p>
                      <p>* 보안상 이미지를 참조할 수 없습니다.</p>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>

            <q-tab-panel name="web" class="q-pa-none">
              <q-splitter v-model="splitterModel" :horizontal="isMobileScreen">
                <template v-slot:before>
                  <q-tabs
                    v-model="innerTab_Web"
                    :vertical="!isMobileScreen"
                    class="text-teal"
                  >
                    <q-tab
                      name="web_1"
                      icon="description"
                      label="동우 화인캠 레포트 재구축"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                    <q-tab
                      name="web_2"
                      icon="description"
                      label="INFAC SCM 구축 및 개발"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                    <q-tab
                      name="web_3"
                      icon="description"
                      label="NVH 대시보드 구축 및 개발"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                    <q-tab
                      name="web_4"
                      icon="description"
                      label="EcoPro 대시보드 서버 구축 및 개발"
                      class="text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                  </q-tabs>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="innerTab_Web"
                    animated
                    :vertical="!isMobileScreen"
                  >
                    <q-tab-panel name="web_1">
                      <h1 class="text-h4 q-mb-md">동우 화인캠 레포트 재구축</h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 20%</p>
                      <p>- 폐쇠망</p>
                      <p>
                        - MES 개발 된 대시보드를 WEB 으로 기능이관 작업 진행
                      </p>
                      <p>* 보안상 이미지를 참조할 수 없습니다.</p>
                    </q-tab-panel>
                    <q-tab-panel name="web_2">
                      <h1 class="tab-inner-title text-h4 q-mb-md">
                        INFAC SCM 구축 및 개발
                      </h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 100%, 단독진행</p>
                      <p>- 북미, 폴란드 각 사이트에 구축 및 개발</p>
                      <p>
                        - 기존의 대시보드 기능만 하던 Cleber.WEB 에 SCM 기능
                        추가
                      </p>
                      <p>
                        - DB 테이블 설계, 백엔드 및 프론트엔드 구현, 코어 기능
                        수정까지 직접 수행
                      </p>
                      <p>
                        - 실시간 데이터 관리 및 납품 기능을 강화하고, 고객사의
                        요구사항을 반영한 맞춤형 기능 추가.
                      </p>
                      <p>
                        - 실시간 데이터 관리 및 납품 기능을 강화하고, 고객사의
                        요구사항을 반영한 맞춤형 기능 추가.
                      </p>
                      <p>
                        - 현재 약 120개의 현대모비스 계열 납품처 고객사에서 사용
                        중이며, 업무 자동화로 인해 납품 관련 데이터 입력 시간이
                        단축, 데이터 입력 오류율이 감소함.
                      </p>
                      <p>- 추가 stack : ZPL(제브라 프린트 언어) 사용</p>
                      <h2>SCM 발주 확인 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_infac_01.jpg'"
                      />
                      <h2>SCM 납품 등록 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_infac_02.jpg'"
                      />
                      <h2>SCM 납품 정보 관리 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_infac_03.jpg'"
                      />
                      <h2>SCM BOX 라벨 등록 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_infac_04.jpg'"
                      />
                      <h2>SCM PALLET 라벨 등록 페이지</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_infac_05.jpg'"
                      />
                    </q-tab-panel>
                    <q-tab-panel name="web_3">
                      <h1 class="text-h4 q-mb-md">NVH 대시보드 구축 및 개발</h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 100%, 단독진행</p>
                      <p>- 북미 사이트에 원격으로 구축 및 화면 개발</p>
                      <h2>NVH 대시보드</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_01.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_02.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_03.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_04.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_05.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_06.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_nvh_07.jpg'"
                      />
                    </q-tab-panel>
                    <q-tab-panel name="web_4">
                      <h1 class="text-h4 q-mb-md">
                        EcoPro 대시보드 구축 및 개발
                      </h1>
                      <q-separator />
                      <br />
                      <p>- 기여도 : 80%</p>
                      <p>- 폐쇄망</p>
                      <p>- 디자이너와 협업(Zeplin 사용)</p>
                      <h2>EcoPro 대시보드</h2>
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_eco_01.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_eco_02.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_eco_03.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_eco_04.jpg'"
                      />
                      <img
                        class="inner-img"
                        :src="'/assets/lisner/lisner_web_eco_05.jpg'"
                      />
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-tab-panel>
          </q-tab-panels> -->
        </q-card>
      </div>
    </section>
  </section>

  <q-dialog v-model="isClickImage" v-if="!isMobileScreen">
    <q-card class="dialog-card">
      <q-card-section class="q-pt-none">
        <img class="dialog-img" :src="selectedImgLink" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import CustomTabs from 'src/pages/components/CustomTabs.vue';
import { useQuasar } from 'quasar';
import { computed, ref, watch } from 'vue';

const $q = useQuasar();
const mainTabs = [
  { name: 'mes', title: 'Cleber.MES' },
  { name: 'web', title: 'Cleber.WEB' },
];
const mainDefault = 'mes';
const subTabs = [
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
ul,
li {
  margin: 0;
}
p,
h1,
h2,
h3,
ul,
li {
  color: #444;
}
.introduction,
.service {
  h1 {
    font-size: 22px;
  }
  h2 {
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
}
p {
  font-size: 13px;
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
.section-intro {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #222944;
  background-image: url('/lisner_logo.jpg');
  background-repeat: no-repeat;
  background-position: center;
}
.tab-warp {
  min-height: 700px;
  padding: 20px 0 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 20px;
    margin-top: 10px;
  }
  .q-card {
    // height: 100%;
    height: 750px;
    // flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
.dialog-card {
  max-width: 600px;
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 20px);
}
.dialog-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
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
