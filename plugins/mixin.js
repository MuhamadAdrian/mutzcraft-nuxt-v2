export const uploadHandler = {
  computed: {
    currentImage() {
      return this.$store.getters['upload/currentImageURL']
    },
    imageHasChanged() {
      return this.$store.getters['upload/imageHasChanged']
    },
    imageURL() {
      return this.$store.getters['upload/imageURL']
    },
    file() {
      return this.$store.getters['upload/file']
    },
  },
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
      if (!this.imageHasChanged) {
      } else if (this.imageHasChanged && !this.currentImage) {
        this.$store.dispatch('upload/uploadFile').then((image_url) => {
          this.user.photoURL = image_url
          this.$store.dispatch('profile/updateProfile', this.user)
        })
      } else if (this.imageHasChanged && this.currentImage) {
        this.$store.dispatch('upload/deleteCurrentImage').then(() => {
          this.$store.dispatch('upload/uploadFile').then((image_url) => {
            this.user.photoURL = image_url
            this.$store.dispatch('profile/updateProfile', this.user)
          })
        })
      }
      this.$store.dispatch('profile/updateProfile', this.user)
    },
  },
}
