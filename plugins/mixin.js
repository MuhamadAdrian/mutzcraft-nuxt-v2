export const uploadHandler = {
  methods: {
    readFile(event) {
      let file = event.target.files[0]
      this.$store.commit('upload/SET_FILE', file)
      this.$store.commit('upload/SET_IMAGE_HAS_CHANGED', true)
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.user.photoURL = reader.result
        this.$store.commit('upload/SET_IMAGE_URL', this.user.photoURL)
      }
    },
    openFolder() {
      this.$refs.file.click()
    },

    updateProfile() {
      this.$store.commit('profile/SET_IS_UPDATING', true)
      if (
        this.$store.getters['upload/imageURL'] ||
        this.$store.getters['upload/file']
      ) {
        if (this.$store.getters['upload/imageHasChanged']) {
          this.$store.dispatch('upload/deleteCurrentImage').then(() => {
            this.$store.dispatch('upload/uploadFile').then((downloadURL) => {
              this.$store.commit('upload/SET_IMAGE_HAS_CHANGED', false)
              this.$store.commit('upload/SET_CURRENT_IMAGE_URL', downloadURL)
              this.user.photoURL = downloadURL
              this.$store.dispatch('profile/updateProfile', this.user)
            })
          })
        } else {
          this.$store.dispatch('profile/updateProfile', this.user)
        }
      } else {
        this.$store.dispatch('profile/updateProfile', this.user)
      }
    },
  },
}
