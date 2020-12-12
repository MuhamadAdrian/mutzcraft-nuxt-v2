export const actions = {
  async nuxtServerInit({ dispatch, commit }, { res }) {
    /** Get the VERIFIED authUser from the server */
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims
      )
      if (claims) {
        commit('users/UPDATE_USER_FROM_JWT', {
          uid: claims.user_id,
          email: claims.email,
          displayName: claims.name,
          emailVerified: claims.email_verified,
        })
        commit('users/SET_CURRENT_USER', true)
        commit('users/SET_EMAIL_VERIFIED', true)
      }
      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },

  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('users/RESET_STORE')
      return
    }
    commit('upload/SET_CURRENT_IMAGE_URL', authUser.photoURL)
    commit('users/SET_AUTH_USER', { authUser })
    commit('users/SET_CURRENT_USER', true)
    if (authUser.emailVerified) {
      commit('users/SET_EMAIL_VERIFIED', true)
    }
  },
}
