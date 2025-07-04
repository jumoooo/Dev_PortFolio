<template>
  <section class="section-intro"></section>
  <section class="containar">
    <section class="section-info">
      <div class="introduction">
        <h1>회사 소개</h1>
        <p>
          Smart Factory 솔루션 공급, 컨설팅, 시스템 구축, 운영관리를 서비스 중인
          중소기업
        </p>
        <br />
      </div>
      <div class="service">
        <h1>서비스</h1>
        <h2>Cleber.MES</h2>
        <p>
          - 실시간 데이터를 기반으로 제조현장을 모니터링하고 공정, 제조를 관리
          하는 스마트 팩토리 프레임워크
        </p>
        <p>
          - 정확한 실시간 데이터를 기반으로 공장 운영현황 및 공장활동 지시 수행
        </p>
        <h3>- stack</h3>
        <ul>
          <li>Common : C#</li>
          <li>DB : MSSQL</li>
        </ul>
        <br />
        <h2>Cleber.WEB</h2>
        <p>- WEB 기반 스마트 팩토리 프레임워크</p>
        <p>- SCM 솔루션 (자재 발주 요청, 완재품 출하 관련)</p>

        <h3>- stack</h3>
        <ul>
          <li>Front-end : Vue.js, Wijmo, SCSS, HTML5</li>
          <li>Back-end : Nest.js, TypeORM</li>
          <li>Common : TypeScript</li>
          <li>DB : MSSQL</li>
        </ul>
      </div>
      <div class="tab-card">
        <h1>프로젝트</h1>
        <q-card>
          <q-tabs
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
              <q-splitter v-model="splitterModel">
                <template v-slot:before>
                  <q-tabs v-model="innerTab_Mes" vertical class="text-teal">
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
                    transition-prev="slide-down"
                    transition-next="slide-up"
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
              <q-splitter v-model="splitterModel">
                <template v-slot:before>
                  <q-tabs v-model="innerTab_Web" vertical class="text-teal">
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
                    transition-prev="slide-down"
                    transition-next="slide-up"
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
          </q-tab-panels>
        </q-card>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('mes');
const innerTab_Mes = ref('mes_1');
const innerTab_Web = ref('web_1');
const splitterModel = ref(10);
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
.containar {
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
.tab-card {
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
    .q-tab-panels {
      height: 100%;
      flex-grow: 1;
      display: flex;
      .q-tab-panel {
        height: 100%;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .q-splitter {
        height: 100%;
      }
    }
  }
}
.full-height-splitter {
  height: 100% !important; /* 중요: 고정 높이를 오버라이드하고 부모의 높이를 따르도록 합니다. */
  flex-grow: 1; /* flex item으로 동작하여 남은 공간을 채웁니다. */
}
.inner-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}
</style>

<route lang="yaml">
meta:
  layout: onlyHeaderLayout
  width: 100%
</route>
