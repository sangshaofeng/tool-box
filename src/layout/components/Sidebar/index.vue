<template>
  <a-layout-sider
    class="sidebar-wrapper"
    :class="bindClass"
    :trigger="null"
    :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    collapsible
    v-model="sidebarCollapsed"
  >
    <div class="sidebar-logo-container" v-if="config.showLogo">
      <transition name="sidebarLogoFade">
        <router-link v-if="sidebarCollapsed" key="collapse" class="sidebar-logo-link" to="/">
          <a-icon v-if="logo" type="github" class="sidebar-logo" />
          <h1 v-else class="sidebar-title">{{ title }} </h1>
        </router-link>
        <router-link v-else key="expand" class="sidebar-logo-link" to="/">
          <a-icon v-if="logo" type="github" class="sidebar-logo" />
          <h1 class="sidebar-title">{{ title }} </h1>
        </router-link>
      </transition>
    </div>
    <a-menu
      :theme="theme"
      mode="inline"
      :selectedKeys="[selectedKeys]"
      @click="toggleMenuActive"
    >
      <template v-for="route in routes">
        <a-menu-item
          v-if="hasOneChild(route) && !route.meta.hidden"
          :key="route.name"
          @click="toPath(route.path)">
          <a-icon :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
        <sidebar-item
          v-else
          :item="route"
          :base-path="route.path"
          :key="route.name"
        />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import path from 'path'
import { mapState } from 'vuex'
import appConfig from '@/app.config'
import SidebarItem from './SidebarItem'
import Routes from '@/router/routes'

export default {
  components: {
    SidebarItem
  },
  data() {
    return {
      routes: Routes,
      openKeys: '',
      selectedKeys: '/dashboard',
      collapsed: false,
      theme: 'light',
      config: appConfig,
      title: 'Tool Box',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  },
  mounted() {
    this.selectedKeys = this.$route.name
  },
  watch: {
    $route() {
      this.selectedKeys = this.$route.name
    }
  },
  computed: {
    ...mapState({
      sidebarCollapsed: state => state.app.sidebarCollapsed,
    }),
    bindClass() {
      return {
        themeWhite: this.theme === 'white'
      }
    },
    isActive() {
      return this.$route.path
    }
  },
  methods: {
    hasOneChild(route) {
      if (route.children) {
        if (route.children.length <= 1) {
          return true
        }
      }
    },
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
    toggleMenuActive(e) {
      this.selectedKeys = e.key
    },
    toPath(path) {
      let completePath = this.resolvePath(path)
      this.$router.push({path: completePath})
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath)
    }
  },
}
</script>

<style lang="less" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 2s;
}
.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-wrapper {
  height: 100%;
  text-align: left;
  box-shadow: 2px 0 6px rgba(0,21,41,.05);
  background: #fff;
  .sidebar-logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;
    .sidebar-logo-link {
      display: inline-block;
      height: 100%;
      width: 100%;
      border: 1px solid #eee;
      .sidebar-logo {
        width: 25px;
        font-size: 20px;
        vertical-align: middle;
      }
      .sidebar-title {
        display: inline-block;
        margin: 0 0 0 12px;
        color: #a0a0a0;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
      .collapse {
        .sidebar-logo {
          margin-right: 0px;
        }
      }
    }
  }
}

.themeWhite {
  border-right: 1px solid #e8e8e8;
  background: #fff;
  .ant-menu {
    border: none;
  }
  .logo {
    background: #fff;
  }
}
.sidebar-wrapper::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: #eee;
}
.sidebar-wrapper::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #fff;
}
.sidebar-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #eee;
}
</style>
