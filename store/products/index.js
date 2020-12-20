import { db } from '../../services/firebase'

export const state = () => ({
    products: [],
    pageSize: 1,
    productLength: null,
    lastProduct: null,
    jumlahYangDiLoadSelanjutnya: null,
})

export const getters = {
    length: (state) => state.productLength,
}

export const actions = {
    async getProducts({ commit, state }) {
        //let products = await db.collection('products').get()
        //commit('SET_LENGTH', products.docs.length)

        let querySnapshot = await db
            .collection('products')
            .orderBy('name')
            .startAfter(state.lastProduct || 0)
            .limit(state.pageSize)
            .get()

        commit(
            'SET_LAST_PRODUCT',
            querySnapshot.docs[querySnapshot.docs.length - 1]
        )
        querySnapshot.forEach((doc) => {
            if (doc.exists) {
                commit('SET_PRODUCTS', doc.data())
            }
        })
    },
}

export const mutations = {
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
}
