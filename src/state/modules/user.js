import axios from '@/config/axios'

const STORE_USER = 'STORE_USER'
const CLEAR_USER = 'CLEAR_USER'


export const state = {
  info: null,
}

export const getters = {
  info: state => state.info,
}

export const mutations = {
  [STORE_USER] (state, data) {
    state.info = data
  },

  [CLEAR_USER] (state) {
    state.info = null
  },
}

export const actions = {
  clearData ({ commit }) {
    commit(CLEAR_USER)
  },

  async fetchUser ({ commit }) {
    // now fetch user data from server
    const { data: { data } } = await axios.get('auth/user')

    commit(STORE_USER, data)

    return data
  },
}