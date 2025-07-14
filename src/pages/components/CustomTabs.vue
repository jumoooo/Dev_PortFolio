<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
  >
    <template v-for="mainTab in mainTabs" :key="mainTab.name">
      <!--mainTab 상단 Tab 부분-->
      <q-tab
        :name="mainTab['name']"
        :label="$t(mainTab['title'])"
        class="text-capitalize"
      />
    </template>
  </q-tabs>
  <q-separator />
  <q-tab-panels v-model="tab" animated>
    <template v-for="mainTab in mainTabs" :key="mainTab.name">
      <q-tab-panel :name="mainTab['name']" class="q-pa-none">
        <q-splitter v-model="splitterModel" :horizontal="isMobileScreen">
          <template v-slot:before>
            <q-tabs
              v-model="currentInnerTab"
              :vertical="!isMobileScreen"
              class="text-teal"
            >
              <template v-for="subTab in subTabs" :key="subTab.title">
                <template v-if="mainTab['name'] == subTab['mainName']">
                  <template
                    v-for="(subTabDtl, index_sub) in subTab['tabList']"
                    :key="index_sub"
                  >
                    <!--subTab 상단 Tab 부분-->
                    <q-tab
                      :name="`${subTab['mainName'] + '_' + (index_sub + 1)}`"
                      icon="description"
                      :label="$t(subTabDtl['title'])"
                      class="sub-tab text-capitalize"
                      style="white-space: normal; word-break: break-word"
                    />
                  </template>
                </template>
              </template>
            </q-tabs>
          </template>
          <!--slot before-->
          <template v-slot:after>
            <q-tab-panels
              v-model="currentInnerTab"
              animated
              :vertical="!isMobileScreen"
            >
              <template v-for="subTab in subTabs" :key="subTab.title">
                <template
                  v-for="(subTabDtl, index) in subTab['tabList']"
                  :key="index"
                >
                  <q-tab-panel
                    :name="`${subTab['mainName'] + '_' + (index + 1)}`"
                  >
                    <!--내용 title-->
                    <h1 class="text-h4 q-mb-md">
                      {{ $t(subTabDtl['title']) }}
                    </h1>
                    <q-separator />
                    <br />
                    <!--내용 contents-->
                    <template
                      v-for="(content, idx) in subTabDtl['content']"
                      :key="idx"
                    >
                      <p>{{ '- ' + $t(content) }}</p>
                    </template>
                    <!--내용 image-->
                    <template v-if="subTabDtl['isImg'] == true">
                      <template
                        v-for="(img, idx_img) in subTabDtl['imgs']"
                        :key="idx_img"
                      >
                        <h2 v-if="img['imgTitle']">
                          {{ $t(img['imgTitle']) }}
                        </h2>

                        <img
                          class="inner-img"
                          :src="img['imgLink']"
                          @click="$emit('clickImage', img['imgLink'])"
                        />
                      </template>
                    </template>
                    <template v-else>
                      <p>* {{ $t('message.1079') }}</p>
                    </template>
                  </q-tab-panel>
                </template>
              </template>
            </q-tab-panels>
          </template>
          <!--slot after-->
        </q-splitter>
      </q-tab-panel>
    </template>
  </q-tab-panels>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { computed, ref } from 'vue';

const $q = useQuasar();

const props = defineProps({
  mainTabs: {
    type: Array,
    default: () => [],
  },
  mainDefault: {
    type: String,
  },
  subDefault: {
    type: Array,
    default: () => [],
  },
  subTabs: {
    type: Array,
    default: () => [],
  },
});
defineEmits(['clickImage']);
const tab = ref(props.mainDefault);
const innerTabs = ref({});
if (props.subDefault.length > 0) {
  props.subDefault.forEach(defaultVal => {
    const [mainName, subIndex] = defaultVal.split('_');
    innerTabs.value[mainName] = defaultVal;
  });
} else {
  props.mainTabs.forEach(defaultVal => {
    innerTabs.value[defaultVal['name']] = defaultVal['name'] + '_' + 1;
  });
}

// 'tab' (메인 탭)의 변경을 감지 -> 'innerTabs' 객체에서 현재 활성화된 서브 탭 값을 가져옴
const currentInnerTab = computed({
  get: () => innerTabs.value[tab.value],
  set: val => {
    innerTabs.value[tab.value] = val;
  },
});

const splitterModel = ref(10);
// 모바일, 테블릿 세로모드 = ture
const isMobileScreen = computed(() => $q.screen.lt.md);
</script>

<style lang="scss" scoped>
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

  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 20px;
    margin-top: 10px;
  }
}
.inner-img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
}
@media (max-width: 786px) {
  .sub-tab {
    :deep(.q-tab__label) {
      font-size: 11px !important; // 모바일 화면에서 12px로 설정
      line-height: 1.2; // 필요하다면 줄 간격도 조절
    }
  }
}
</style>
