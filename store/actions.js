export default {
  async nuxtServerInit({ dispatch }, ctx) {
    if (this.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - this.$fire.auth cannot be accessed.'
    }

    if (ctx.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    }

    if (ctx.app.$fire.auth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fire.auth cannot be accessed.'
    }

    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    /** Get the VERIFIED authUser from the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims
      )

      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },

  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', { authUser })
    commit('SET_CURRENT_USER', true)
  },

  checkVuexStore(ctx) {
    if (this.$fire.auth === null) {
      throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
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

  loginAction({ commit, dispatch }, { email, password }) {
    this.$fire.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        let user = res.user
        console.log(user.uid)
        if (!user.emailVerified) {
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
              user
                .getIdToken(true)
                .then((idToken) => commit('SET_TOKEN', idToken))
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
