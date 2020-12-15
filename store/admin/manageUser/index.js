export const state = () => ({
  users: [],
  nextPageToken: null,
  isMax: false,
  message: null,
})

export const getters = {
  users: (state) => state.users,
  nextPageToken: (state) => state.nextPageToken,
}

export const actions = {
  makeAdmin({ commit }, email) {
    this.$axios
      .$post('/api/set-custom-claims', {
        email: email,
      })
      .then(() => {
        window.location.reload()
        console.log('success')
      })
      .catch((err) => console.log('failed'))
  },
  loadData({ commit, state }, payload) {
    this.$axios
      .$post('/api/getUsers', {
        nextPageToken: state.nextPageToken,
      })
      .then((allUsers) => {
        if (!allUsers.pageToken) {
          commit('SET_IS_MAX', true)
        } else {
          allUsers.users.forEach((user) => {
            commit('SET_USERS', user)
            commit('SET_NEXT_PAGE')
          })
        }
      })
  },
}

export const mutations = {
  SET_MESSAGE(state, message) {
    state.message = message
  },
  SET_USERS(state, user) {
    state.users.push(user)
  },
  SET_IS_MAX(state, condition) {
    state.isMax = condition
  },

  SET_NEXT_PAGE(state, payload) {
    if (payload) {
      state.nextPageToken = payload
    }
    let lastUser = state.users[state.users.length - 1]
    state.nextPageToken = lastUser.uid
  },
}
