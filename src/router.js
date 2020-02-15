import Vue from 'vue'
import store from './state/store'
import Router from 'vue-router'

Vue.use(Router)

function importView (view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: importView('Home'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: importView('Onboarding/Login'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: importView('Onboarding/Register'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/recovery',
      name: 'recovery',
      component: importView('Onboarding/Recovery'),
      meta: {
        requiresAuth: false
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const user = store.getters['user/info']
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    // redirect to login if not authenticated
    if (!store.getters['auth/isAuthenticated']) {
      store.dispatch('auth/logout')

      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
