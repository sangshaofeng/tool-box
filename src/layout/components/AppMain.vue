<template>
  <a-layout-content class="content-container">
    <keep-alive :include="cachedViews">
      <router-view v-if="$route.meta.keepAlive" :key="key"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </a-layout-content>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    cachedViews() {
      return this.$store.state.routeTagsViewer.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
}
</script>

<style lang="less" scoped>
.ant-layout-content {
  margin: 20px;
  min-height: 280px;
}

/* fade-transform */
// .fade-transform-leave-active,
// .fade-transform-enter-active {
//   transition: all .5s;
// }
// .fade-transform-enter {
//   opacity: 0;
//   transform: translateX(-30px);
// }
// .fade-transform-leave-to {
//   opacity: 0;
//   transform: translateX(30px);
// }
</style>
