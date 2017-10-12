<style lang="scss">
  .content {
    margin-left: $side-width;
    height: 100%;
    overflow: scroll;

    &.slide-close {
      margin-left: $side-close-width;
    }
  }
</style>

<template lang="pug">
  .content(:class="{'slide-close': sideClose}")
    router-view
</template>

<script>
  export default {
    computed: {
      sideClose() {
        return this.$store.state.sideBar.close
      }
    }
  }
</script>
