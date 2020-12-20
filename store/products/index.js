import { db } from '../../services/firebase'

export const state = () => ({
    products: [],
    pageSize: 1,
    productLength: null,
    lastProduct: null,
    firstProduct: null,
})

export const getters = {
    length: (state) => state.productLength,
    products: (state) => state.products,
}

export const actions = {
    async getProducts({ commit, dispatch }, payload) {
        //let products = await db.collection('products').get()
        //commit('SET_LENGTH', products.docs.length)

        let querySnapshot = await db
            .collection('products')
            .orderBy('name')
            .limit(2)
            .get()

        if (!querySnapshot.empty) {
            let lastProduct = querySnapshot.docs[querySnapshot.docs.length - 1]
            let firstProduct = querySnapshot.docs[0]

            await dispatch('setLastProduct', lastProduct)
            await dispatch('setFirstProduct', firstProduct)

            querySnapshot.forEach((doc) => {
                if (doc.exists) {
                    commit('SET_PRODUCTS', doc.data())
                }
            })
        }
    },

    getNext({ commit, dispatch }, lastProduct) {
        return new Promise((resolve, reject) => {
            db.collection('products')
                .orderBy('name')
                .startAfter(lastProduct)
                .limit(2)
                .get()
                .then((querySnapshot) => {
                    let lastProduct =
                        querySnapshot.docs[querySnapshot.docs.length - 1]
                    let firstProduct = querySnapshot.docs[0]
                    if (lastProduct && firstProduct) {
                        dispatch('setLastProduct', lastProduct)
                        dispatch('setFirstProduct', firstProduct)
                    }
                    resolve(querySnapshot.docs)
                })
                .catch((err) => reject(err))
        })
    },
    getPrev({ commit, dispatch }, firstProduct) {
        return new Promise((resolve, reject) => {
            db.collection('products')
                .orderBy('name')
                .endBefore(firstProduct)
                .limitToLast(2)
                .get()
                .then((querySnapshot) => {
                    let lastProduct =
                        querySnapshot.docs[querySnapshot.docs.length - 1]
                    let firstProduct = querySnapshot.docs[0]

                    if (lastProduct && firstProduct) {
                        dispatch('setLastProduct', lastProduct)
                        dispatch('setFirstProduct', firstProduct)
                    }
                    resolve(querySnapshot.docs)
                })
                .catch((err) => reject(err))
        })
    },

    setLastProduct({ commit }, lastProduct) {
        commit('SET_LAST_PRODUCT', lastProduct)
    },
    setFirstProduct({ commit }, firstProduct) {
        commit('SET_FIRST_PRODUCT', firstProduct)
    },
}

export const mutations = {
    RESET_PRODUCTS(state) {
        state.products = []
    },
    SET_PRODUCTS(state, product) {
        state.products.push(product)
    },

    SET_PAGE_SIZE(state, val) {
        state.pageSize = val
    },

    SET_LENGTH(state, length) {
        state.productLength = length
    },

    SET_LAST_PRODUCT(state, lastproduct) {
        state.lastProduct = lastproduct
    },
    SET_FIRST_PRODUCT(state, firstproduct) {
        state.firstProduct = firstproduct
    },
}
