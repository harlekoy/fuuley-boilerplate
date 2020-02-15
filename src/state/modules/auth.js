import token from '@/utils/token'
import Cookies from 'js-cookie'
import axios from '@/config/axios'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export const state = {
  authToken: Cookies.get('auth')
}

export const getters = {
  isAuthenticated: (state, getters, rootState, rootGetters) => {
    return !!(getters.authStatus && rootGetters['user/info'])
  },

  userToken: state => state.authToken,
  authStatus: state => !!token.from(state.authToken),
}

export const mutations = {
  [LOGIN] (state, data) {
    state.authToken = data.token

    Cookies.set('auth', data.token, { expires: data.expiresIn, path: '/', sameSite: 'strict' })
    Cookies.set('refreshToken', data.refreshToken, { expires: data.expiresIn, path: '/', sameSite: 'strict' })
  },

  [LOGOUT] (state) {
    Cookies.remove('auth')
    state.authToken = null
  }
}

export const actions = {
  async login ({ commit, dispatch, rootGetters }, { email, password, remember }) {
    const { data: { data }} = await axios.post('auth/login', { email, password })

    commit(LOGIN, {
      token: data.access_token,
      refreshToken: data.refresh_token,
      expiresIn: remember ? data.expires_in : 1,
    })

    // Now fetch user permissions from server
    await dispatch('user/fetchUser', null, { root: true })

    // Now fetch user data from server
    dispatch('user/fetchPermissions', null, { root: true })
  },

  logout ({ commit }) {
    commit(LOGOUT)
  }
}
