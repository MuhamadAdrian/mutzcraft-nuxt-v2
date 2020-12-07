import initialState from './state'
import Cokies from 'js-cookie'
export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.user = {
      uid: authUser.uid,
      email: authUser.email,
      photoURL: authUser.photoURL,
      phoneNumber: authUser.phoneNumber,
      emailVerified: authUser.emailVerified,
    }
  },
  UPDATE_USER: (state, authUser) => {
    state.user = {
      uid: authUser.uid,
      email: authUser.email,
      photoURL: authUser.photoURL,
      phoneNumber: authUser.phoneNumber,
      emailVerified: authUser.emailVerified,
    }
  },

  SET_COUNTDOWN(state) {
    state.timer = 50
    let countdown = setInterval(() => {
      state.timer--
      if (state.timer == 0) {
        clearInterval(countdown)
      }
    }, 1000)
  },
  SET_SHOW_COUNTDOWN(state, payload) {
    state.showCountdown = payload
  },

  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload
  },

  SET_MESSAGE(state, { success, errMsg }) {
    state.message = errMsg
    state.success = success
  },

  SET_HAS_REGISTERED(state, payload) {
    state.hasRegistered = payload
  },
  SET_HAS_LOGIN(state, payload) {
    state.hasLogin = payload
  },

  SET_TOKEN(state, payload) {
    Cokies.set('access_token', payload)
    state.access_token = payload
  },
}
