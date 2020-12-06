export const actions = {
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

  onAuthStateChanged({ commit }, { authUser, claims }) {
    if (!authUser) {
      console.log(authUser)
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

  //My Authentication//******************* joss */

  createNewUser({ commit }, payload) {
    this.$fire.auth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then((res) => {
        let user = res.user
        let message = {}
        message.validate = true
        message.errMsg =
          'Success, please check your email to verify your account :)'
        commit('SET_MESSAGE', message)
      })
      .catch((err) => {
        let message = {}
        message.validate = false
        message.errMsg = err.message
        commit('SET_MESSAGE', message)
      })
  },
}

export const state = () => ({
  message: null,
  validate: null,
  user: null,
  currentUser: false,
})

export const getters = {
  message: (state) => state.message,
  validate: (state) => state.validate,
  currentUser: (state) => state.currentUser,
}

export const mutations = {
  SET_AUTH_USER(state, { authUser }) {
    console.log(authUser)
    state.user = {
      uid: authUser.uid,
      email: authUser.email,
      photoURL: authUser.photoURL,
      phoneNumber: authUser.phoneNumber,
      emailVerified: authUser.emailVerified,
    }
  },

  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload
  },
  SET_MESSAGE(state, { validate, errMsg }) {
    state.message = errMsg
    state.validate = validate
  },
}
