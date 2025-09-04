<template>
  <div class="top-inner">
    <!-- <a v-if="detailID" class="more-info" :href="`/portfolio/${detailID}`" flat>
      <span>상세보기</span>
      <q-icon name="arrow_forward" />
    </a> -->
  </div>
  <div class="content-inner">
    <p>{{ $t(workDate) }}</p>
    <p>{{ $t(title) }}</p>
    <br />
    <strong>{{ $t(category) }}</strong>
    <div class="detail-content">
      <template v-for="content in detailContents" :key="content.id">
        <div class="detail-item-wrapper">
          <span v-if="content['type'] == 'div'" class="before-hyphen">{{
            $t(content['content'])
          }}</span>
          <a
            v-else-if="content['type'] == 'a'"
            class="before-hyphen"
            :href="content['content']"
            target="_blank"
            >{{ $t(content['content']) }}</a
          >
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  workDate: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  detailContents: {
    type: Array,
    default: () => [],
  },
  detailID: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
.detail-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 250px;
  overflow-y: auto;
  padding-right: 5px;
  box-sizing: border-box;
}
.detail-item-wrapper {
  width: 100%;
  text-align: left;
}

.top-inner {
  width: 100%;
  text-align: right;
}
.content-inner {
  width: 100%;
  justify-content: center;
}
.more-info {
  color: black;
  display: inline-flex;
  font-weight: bold;
  gap: 4px;
  align-items: center;
}
</style>
