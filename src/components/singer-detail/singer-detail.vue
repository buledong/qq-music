<template>
  <transition name="fadein">
    <div class="singer-detail">
      haha
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';

  export default {
    create() {
      console.log(this.singer);
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~common/stylus/variable'
  .singer-detail
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background $color-background
    z-index 100

  .fadein-enter-active, .fadein-leave-active
    transition all 0.3s

  .fadein-enter, .fadein-leave-to
    transform translate3d(100%, 0, 0)
</style>