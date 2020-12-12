export const state = () => ({
  file: null,
  imageURL: null,
  currentImageURL: null,
  uploadPercentage: null,
  imageHasChanged: false,
})

export const getters = {
  file: (state) => state.file,
  imageURL: (state) => state.imageURL,
  currentImageURL: (state) => state.currentImageURL,
  imageHasChanged: (state) => state.imageHasChanged,
}

export const actions = {
  deleteCurrentImage({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let url = state.currentImageURL
      this.$fire.storage
        .refFromURL(url)
        .delete()
        .then(() => {
          resolve(true)
        })
        .catch((err) => reject(err))
    })
  },

  uploadFile({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      let file = state.file
      let storageRef = this.$fire.storage.ref('profiles/' + file.name)
      let uploadTask = storageRef.put(file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          commit('SET_UPLOAD_PERCENTAGE', progress)
        },
        (error) => {
          // Handle unsuccessful uploads
          reject(error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            resolve(downloadURL)
            console.log('File available at', downloadURL)
          })
        }
      )
    })
  },
}

export const mutations = {
  SET_FILE(state, file) {
    state.file = file
  },
  SET_IMAGE_URL(state, imageURL) {
    state.imageURL = imageURL
  },
  SET_CURRENT_IMAGE_URL(state, currentImageURL) {
    state.currentImageURL = currentImageURL
  },
  SET_IMAGE_HAS_CHANGED(state, hasChanged) {
    state.imageHasChanged = hasChanged
  },
  SET_UPLOAD_PERCENTAGE(state, percentage) {
    state.uploadPercentage = percentage
  },
}
