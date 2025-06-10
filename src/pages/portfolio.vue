<template>
  <!--해더-->
  <section id="header"></section>
  <!--컨텐츠-->
  <section></section>
  <!--풋터-->
  <section></section>
</template>

<script setup></script>

<style lang="scss" scoped>
#header {
  width: 100%;
  height: 300px;
  background-color: aquamarine;
}
</style>

<route lang="yaml">
meta:
  layout: onlyHeaderLayout
  width: 100%
</route>
