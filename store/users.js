import Cookie from 'js-cookie'

export const state = () => ({
  message: null,
  success: null,
  hasRegistered: false,
  hasLogin: false,
  user: null,
  currentUser: false,
  timer: null,
  showCountdown: false,
})

export const actions = {
  resendEmail({ commit }) {
    let user = this.$fire.auth.currentUser
    user.sendEmailVerification().then(() => {
      let message = {}
      message.success = true
      message.errMsg = `The verification email has been sent back, please check it "${user.email}"`
      commit('SET_MESSAGE', message)
      commit('SET_COUNTDOWN')
    })
  },
  createNewUser({ commit }, payload) {
    this.$fire.auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((res) => {
        let user = res.user
        let db = this.$fire.firestore
        db.collection('users')
          .doc(user.uid)
          .set({
            created: Date.now(),
            displayName: payload.username,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified,
            email: user.email,
            uid: user.uid,
          })
          .then(() => {
            user
              .updateProfile({
                displayName: payload.username,
              })
              .then(() => {
                user
                  .sendEmailVerification()
                  .then(() => {
                    let message = {}
                    message.success = true
                    message.errMsg = `Success, please check your email "${user.email}" to verify your account :)`
                    commit('SET_MESSAGE', message)
                    commit('SET_HAS_REGISTERED', true)
                    commit('SET_COUNTDOWN')
                  })
                  .catch((err) => {
                    let message = {}
                    message.success = false
                    message.errMsg = err.message
                    commit('SET_MESSAGE', message)
                  })
              })
              .catch((err) => {
                let message = {}
                message.success = false
                message.errMsg = err.message
                commit('SET_MESSAGE', message)
              })
          })
          .catch((err) => {
            let message = {}
            message.success = false
            message.errMsg = err.message
            commit('SET_MESSAGE', message)
          })
      })
      .catch((err) => {
        let message = {}
        message.success = false
        message.errMsg = err.message
        commit('SET_MESSAGE', message)
      })
  },

  loginAction({ commit, dispatch, state }, { email, password }) {
    this.$fire.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        let user = res.user
        if (!user.emailVerified) {
          if (state.timer == null || state.timer == 0) {
            dispatch('resendEmail')
          }
          let message = {}
          message.success = false
          message.errMsg = `Please verify you email "${user.email}" first, or resend the email`
          commit('SET_MESSAGE', message)
          commit('SET_HAS_LOGIN', false)
        } else {
          let db = this.$fire.firestore
          db.collection('users')
            .doc(user.uid)
            .update({
              emailVerified: user.emailVerified,
            })
            .then(() => {
              user.getIdToken(true).then((token) => {
                Cookie.set('access_token', token)
              })
              let message = {}
              message.success = true
              message.errMsg = `Authenticated as ${user.email}`
              commit('UPDATE_USER', user)
              commit('SET_MESSAGE', message)
              commit('SET_HAS_LOGIN', true)
            })
            .catch((err) => {
              let message = {}
              message.success = false
              message.errMsg = err.message
              commit('SET_MESSAGE', message)
            })
        }
      })
      .catch((err) => {
        let message = {}
        message.success = false
        message.errMsg = err.message
        commit('SET_MESSAGE', message)
      })
  },
}

export const mutations = {
  RESET_STORE: (state) => {
    Cookie.remove('access_token')
    state.user = null
    state.message = null
    state.success = null
  },

  UPDATE_USER: (state, authUser) => {
    state.user = authUser
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.user = {
      uid: authUser.uid,
      email: authUser.email,
      emailVerified: authUser.emailVerified,
      displayName: authUser.displayName,
      phoneNumber: authUser.phoneNumber,
      photoURL: authUser.photoURL,
    }
  },
  UPDATE_USER_FROM_JWT: (state, authUser) => {
    state.user = authUser
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
}
