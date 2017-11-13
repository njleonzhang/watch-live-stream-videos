<template lang="pug">
a.video-item(:href='room.link')
  .item-wrapper
    .screen-shoot
      .screen-shoot-wrapper(:style="{color: 'red', 'background-image': `url(${room.screenShoot})`}")
    .info-area
      .info-area-wrapper
        .title {{room.title}}
        .info
          .online {{getReadableOnline(room.online)}}
          .host {{room.hostName}}
          .platform {{getPlatform(room.platform)}}
</template>

<style lang="scss" scoped>
  .video-item {
    position: relative;
    box-sizing: border-box;
    background: white;

    .item-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .screen-shoot {
      display: block;
      width: 100%;
      padding-top: 100% * $image-height-ratio / $image-width-ratio;
      position: relative;

      .screen-shoot-wrapper {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .title {
      flex: 0 0 1;
      width: 100%;
      color: #222;
      text-align: center;
      font-size: 16px;
      line-height: 44px;
      font-weight: 900;
    }

    .info-area {
      display: block;
      width: 100%;
      padding-top: 100% * ($item-height-ratio / $item-width-ratio - $image-height-ratio / $image-width-ratio);
      position: relative;
    }

    .info-area-wrapper {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      align-content: center;
    }

    .info {
      position: relative;
      font-size: 14px;
      width: 100%;

      .online, .host, .platform {
        display: inline-block;
        color: #333;
      }

      .online {
        margin-left: 10px;
      }

      .host {
        color: #2a9d89;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
      }

      .platform {
        float: right;
        margin-right: 10px;
      }
    }
  }
</style>

<script>
  var numeral = require('numeral')

  export default {
    props: [
      'room'
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
      },
      getPlatform(platformCode) {
        return '斗鱼'
      },
      getReadableOnline(online) {
        return numeral(online).format('0.0a')
      }
    }
  };
</script>
