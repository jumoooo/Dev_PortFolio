<template>
  <div class="chat-header">
    <q-btn flat color="red" no-caps>ChatGPT</q-btn>
  </div>
  <div class="chat-thread">
    <div id="thread-main">
      <div class="main-title" v-if="!isChatUse">
        {{ '무슨작업을 하고 계세요?' }}
      </div>
    </div>
    <div id="thread-bottom">
      <div class="chat-wrap">
        <TiptapNoMenuEditor
          v-model="contentModel"
          placeholder="무엇이든 물어보세요"
        />
        <q-btn class="btn-search" flat @click="searchClick">
          <q-icon name="north" size="15px" color="teal" />
        </q-btn>
      </div>
    </div>
  </div>
  <div class="anthor-bottom">하부</div>
</template>

<script setup>
import { ref } from 'vue';
import TiptapNoMenuEditor from 'src/components/tiptap/TiptapNoMenuEditor.vue';

const contentModel = ref('');
const isChatUse = ref(false);
const searchClick = () => {};
</script>

<style lang="scss" scoped>
.chat-thread {
  // background-color: aqua;
  min-height: 50vh;
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.chat-header {
  position: absolute;
  z-index: 2;
}
#thread-main {
  padding: 0 10px;
  flex: 1 1 auto;
  overflow-y: auto;
  display: flex;
  z-index: 1;
  position: relative;
}
#thread-bottom {
  height: 110px;
  z-index: 1;
  position: relative;
  padding: 10px;
}
.anthor-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: lightgray;
  z-index: 2; // 뒤에 깔림
  min-height: 110px;
}
.chat-wrap {
  // background-color: brown;
  border-radius: 15px;
  border: 1px solid black;
  height: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;
}
.btn-search {
  height: 20px;
  border-radius: 50%;
  background-color: rgb(33, 33, 33);
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-search .q-icon {
  margin: 0;
  padding: 0;
  line-height: 1;
  font-size: 16px; // 아이콘 사이즈 명확히 지정
  vertical-align: middle;
}
.main-title {
  width: 100%;
  align-items: flex-end;
  display: flex;
  justify-content: center;
  font-size: 28px;
  padding: 25px 0;
}
</style>
<route lang="yaml">
meta:
  layout: NomalLayout
</route>
