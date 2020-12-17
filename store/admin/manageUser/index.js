export const state = () => ({})

export const getters = {}
export const actions = {
    makeAdmin({ commit }, email) {
        this.$axios
            .$post('/api/set-custom-claims', {
                email: email,
            })
            .then(() => {
                window.location.reload()
                console.log('success')
            })
            .catch((err) => console.log('failed'))
    },
}

export const mutations = {}
