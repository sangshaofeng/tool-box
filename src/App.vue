<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less">
.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border-right: none !important;
}
.ant-menu-inline .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title {
  width: 100% !important;
}
</style>
