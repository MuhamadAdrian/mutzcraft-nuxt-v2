export default {
  isLoggedIn: (state) => {
    try {
      return state.user.uid !== null
    } catch {
      return false
    }
  },

  timer: (state) => state.timer,

  showCountdown: (state) => state.showCountdown,
}
