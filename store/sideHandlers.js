export const state = () => ({
  fabClicked: false,
  showEditProfile: false,
})

export const getters = {
  showEditProfile: (state) => state.showEditProfile,
  fabClicked: (state) => state.fabClicked,
}

export const mutations = {
  setFabClicked(state) {
    state.fabClicked = !state.fabClicked
  },
  TOGGLE_EDIT_PROFILE(state, payload) {
    state.showEditProfile = payload
  },
}
