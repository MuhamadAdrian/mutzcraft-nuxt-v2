export const actions = {
  updateProfile({ commit }, profile) {
    profile.updated_at = Date.now()
    this.$fire.firestore
      .collection('users')
      .doc(profile.uid)
      .update(profile)
      .then(() => {
        this.$fire.auth.currentUser
          .updateProfile({
            displayName: profile.displayName,
            phoneNumber: profile.phoneNumber,
            email: profile.email,
            photoURL: profile.photoURL,
          })
          .then(() => {
            commit('sideHandlers/TOGGLE_EDIT_PROFILE', false, { root: true })
            let message = {}
            message.success = true
            message.errMsg = 'Your profile has been updated'
            commit('users/SET_MESSAGE', message, { root: true })
            commit('users/UPDATE_USER_FROM_JWT', profile, { root: true })
          })
          .catch((err) => {
            let message = {}
            message.success = false
            message.errMsg = err
            commit('users/SET_MESSAGE', message, { root: true })
          })
      })
      .catch((err) => {
        let message = {}
        message.success = false
        message.errMsg = err
        commit('users/SET_MESSAGE', message, { root: true })
      })
  },
}
