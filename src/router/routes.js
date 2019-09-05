import Layout from '@/layout'

const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: 'pie-chart',
      hidden: false
    },
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/Dashboard/index'),
        name: "Dashboard",
        meta: {
          keepAlive: true,
          affix: true,
          title: "Dashboard",
        }
      },
    ]
  },
  // 进制转换页面
  {
    path: '/radix',
    component: Layout,
    redirect: '/radix/index',
    name: "Radix",
    meta: {
      title: "进制转换",
      icon: 'retweet',
      hidden: false
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/Radix'),
        name: "Radix",
        meta: {
          keepAlive: true,
          title: "进制转换",
        }
      },
    ]
  },
  // ascii查询表
  {
    path: '/ascii',
    component: Layout,
    redirect: '/ascii/index',
    name: "ASCII",
    meta: {
      title: "ASCII编码查询",
      icon: 'code',
      hidden: false
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/ASCIITable'),
        name: "ASCII",
        meta: {
          keepAlive: false,
          title: "ASCII编码查询",
        }
      },
    ]
  },
  // 时间工具
  {
    path: '/time-utils',
    component: Layout,
    redirect: '/time-utils/index',
    name: "TimeUtils",
    meta: {
      title: "时间戳工具",
      icon: 'dashboard',
      hidden: false
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/TimeUtils'),
        name: "TimeUtils",
        meta: {
          keepAlive: false,
          title: "时间戳工具",
        }
      },
    ]
  },
  // 图片压缩
  {
    path: '/image-compress',
    component: Layout,
    redirect: '/image-compress/index',
    name: "ImageCompress",
    meta: {
      title: "图片压缩",
      icon: 'picture',
      hidden: false
    },
    children: [
      {
        path: 'index',
        component: () => import('@/pages/ImageCompress'),
        name: "ImageCompress",
        meta: {
          keepAlive: false,
          title: "图片压缩",
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login'),
    meta: {
      title: '',
      hidden: true
    }
  },
  {
    path: '/404',
    name: "404",
    component: () => import('@/pages/404'),
    meta: {
      title: "404",
      hidden: true
    }
  },
  {
    path: '*',
    name: "all",
    redirect: '/404',
    meta: {
      hidden: true
    }
  }
]

export default constantRouterMap
