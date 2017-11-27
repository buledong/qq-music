<template>
  <transition name="fadein">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex';
  import {getSingerDetail} from 'api/singer';
  import {ERR_OK} from 'api/config';
  import {createSong} from 'common/js/song';
  import MusicList from 'components/music-list/music-list';

  export default {
    data() {
      return {
        songs: []
      };
    },
    created() {
      this._getDetail();
    },
    computed: {
      title() {
        return this.singer.name;
      },
      bgImage() {
        return this.singer.avatar;
      },
      ...mapGetters([
        'singer'
      ])
    },
    methods: {
      _getDetail() {
        if (!this.singer.id) {
          this.$router.push('/singer');
          return;
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (ERR_OK === res.code) {
            this.songs = this._normalizeSongs(res.data.list);
            console.log(this.songs);
          }
        });
      },
      _normalizeSongs(list) {
        let ret = [];
        list.forEach((item) => {
          let {musicData} = item;
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData));
          }
        });
        return ret;
      }
    },
    components: {
      MusicList
    }
  };
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import '~common/stylus/variable'

  .fadein-enter-active, .fadein-leave-active
    transition all 0.3s

  .fadein-enter, .fadein-leave-to
    transform translate3d(100%, 0, 0)
</style>