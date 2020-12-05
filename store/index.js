export const state = () => ({
  fabClicked: false,
})

export const getters = {
  fabClicked: (state) => state.fabClicked,
}

export const mutations = {
  setFabClicked(state) {
    state.fabClicked = !state.fabClicked
  },
}
