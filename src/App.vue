<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Mheader from './components/m-header/2.vue';
  import Tab from './components/tab/tab.vue';

  export default {
    name: 'app',
    components: {
      'm-header': Mheader,
      tab: Tab
    }
  };
</script>

<style type="text/stylus" lang="stylus" scoped>
  @import "common/stylus/index.styl"
  #app {

  }
</style>
