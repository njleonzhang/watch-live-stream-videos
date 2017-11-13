<template lang="pug">
  .home
    video-item(
      v-for="room in rooms",
      :key="room.id"
      :room="room"
    )
</template>

<style lang="scss" scoped>
  .home {
    padding: 20px;

    .video-item {
      display: inline-block;
      width: $item-width-ratio * 1%;
      padding-top: $item-height-ratio* 1%;
      margin-right: 2%;
      margin-bottom: 1%;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }
</style>

<script>
  import VideoItem from '@/components/VideoItem.vue'
  import api from '@/api'

  export default {
    data() {
      return {
        rooms: []
      }
    },

    async beforeRouteEnter(to, from, next) {
      let rooms = await api.User.getRooms()
      next(vm => {
        vm.rooms = rooms
      })
    },

    created() {},

    methods: {},

    route: {},

    components: {
      VideoItem
    }
  };
</script>
