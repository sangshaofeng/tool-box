
const user = {
  state: {
    username: "",
    roles: [],
    avatar: "",
  },
  mutations: {
    SET_USERNAME: (state, username) => {
      state.username = username
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    }
  },
  actions: {
    setUserInfo({commit}, user) {
      // 实际开发中应该从后台获取用户信息，这里假设mockUser种的数据是刚刚从后台获取到的
      // axios.get('/user/xxx').then(res => {})
      commit('SET_USERNAME', user.username)
      commit('SET_ROLES', user.roles)
      commit('SET_AVATAR', user.avatar)
    }
  }
}

export default user
