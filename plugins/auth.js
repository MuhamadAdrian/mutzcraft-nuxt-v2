import { auth } from '~/services/firebase'
import Cookie from 'js-cookie'
export default ({ store }) => {
    let access_token = Cookie.get('access_token')
    if (!access_token || access_token == undefined) {
        let user = auth.currentUser
        if (user) {
            auth.signOut().then(() => console.log('no access token'))
        } else {
            store.commit('users/RESET_STORE')
        }
    }
    auth.onAuthStateChanged((user) => {
        if (user) {
            user.getIdTokenResult().then((idTokenResult) => {
                store.commit('users/UPDATE_USER_FROM_JWT', {
                    uid: user.uid,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    displayName: user.displayName,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    isAdmin: idTokenResult.claims.admin,
                })
            })
            if (user.emailVerified) {
                store.commit('users/SET_CURRENT_USER', true)
                store.commit('users/SET_EMAIL_VERIFIED', true)
                store.commit('upload/SET_CURRENT_IMAGE_URL', user.photoURL)
            }
        } else {
            store.commit('users/RESET_STORE')
        }
    })
}
