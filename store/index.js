import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req, res }) {
    if (process.server && process.static) return
    if (!req.headers.cookie) return

    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token

    if (!accessTokenCookie) return

    const decoded = JWTDecode(accessTokenCookie)

    if (decoded) {
      console.log(decoded)
      commit('users/UPDATE_USER_FROM_JWT', {
        uid: decoded.user_id,
        email: decoded.email,
        displayName: decoded.name,
        emailVerified: decoded.email_verified,
      })
      commit('users/SET_CURRENT_USER', true)
    }

    /** Get the VERIFIED authUser from the server */
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user

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
      commit('users/RESET_STORE', { root: true })
      return
    }
    commit('users/SET_AUTH_USER', { authUser }, { root: true })
    commit('users/SET_CURRENT_USER', true, { root: true })
  },
}
