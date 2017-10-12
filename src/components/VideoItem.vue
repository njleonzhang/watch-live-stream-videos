<template lang="pug">
.video-item
  .item-wrapper
    .item-introduce(v-if="!playing")
      .introduce-wrapper
        .desc {{desc}}
        .play-button(
          @click="play"
        ) 播放
    .item-content(v-if="playing")
      embed.player(
        allownetworking='all',
        allowscriptaccess='always',
        :src='src',
        quality='high',
        bgcolor='#000',
        wmode='window',
        allowfullscreen='true',
        play="false"
        allowfullscreeninteractive='true',
        type='application/x-shockwave-flash')
    .name
      span {{desc}}
      .stop-play-button(@click="stopPlay" v-if="playing") 停止
</template>

<style lang="scss" scoped>
  .video-item {
    position: relative;
    box-sizing: border-box;
    margin-bottom: 50px;

    .item-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .item-content, .item-introduce {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .player {
      width: 100%;
      height: 100%;
    }

    .name {
      height: 50px;
      line-height: 50px;
      color: $light-blue;
      text-align: center;
      font-size: 18px;
    }

    .stop-play-button {
      float: right;
    }

    .item-introduce {
      background: $light-gray;
    }

    .introduce-wrapper {
      .desc {
        text-align: center;
      }

      .play-button {
        width: 100px;
        height: 60px;
        line-height: 60px;
        border: 1px solid black;
        border-radius: 20px;
        text-align: center;
      }
    }

    &:nth-child(2n + 1) {
      margin-right: 5%;
    }
  }
</style>

<script>
  export default {
    props: [
      'src',
      'desc'
    ],
    data() {
      return {
        playing: false
      }
    },
    methods: {
      play() {
        this.playing = true
      },
      stopPlay() {
        this.playing = false
      }
    }
  };
</script>
