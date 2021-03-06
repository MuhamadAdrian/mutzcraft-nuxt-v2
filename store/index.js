import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        /** Get the VERIFIED authUser from the server */

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
                emailVerified: decoded.email_verified,
                displayName: decoded.name,
                phoneNumber: decoded.phoneNumber,
                photoURL: decoded.picture,
                isAdmin: decoded.admin || false,
            })
        }
    },
}
