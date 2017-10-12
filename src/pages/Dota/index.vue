<template lang="pug">
  .home
    video-item(
      v-for="item in items",
      :key="item.src",
      :src="item.src",
      :desc="item.desc"
    )
</template>

<style lang="scss" scoped>
  .home {
    padding: 20px;

    .video-item {
      display: inline-block;
      width: 45%;
      padding-top: 30%;
    }
  }
</style>

<script>
  import VideoItem from '@/components/VideoItem.vue'

  export default {
    data() {
      return {
        items: [{
          src: 'https://staticlive.douyucdn.cn/common/share/play.swf?room_id=58428',
          desc: 'yyf(斗鱼)'
        }, {
          src: 'http://liveshare.huya.com/longdd/huyacoop.swf',
          desc: '龙神(虎牙)'
        }, {
          src: 'https://staticlive.douyucdn.cn/common/share/play.swf?room_id=52876',
          desc: '甲鱼'
        }, {
          src: 'https://staticlive.douyucdn.cn/common/share/play.swf?room_id=74960',
          desc: '老陈'
        }]
      }
    },

    created() {},

    methods: {},

    route: {},

    components: {
      VideoItem
    }
  };
</script>
