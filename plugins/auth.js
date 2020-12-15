import { auth } from '~/services/firebase'
export default ({ store }) => {
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
    }
  })
}
