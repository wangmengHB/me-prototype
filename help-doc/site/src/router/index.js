import Vue from 'vue'
import Router from 'vue-router'
import MarkDown from '../views/markdown.vue'
import Editor from '../views/editor.vue'
import Videos from '../views/videos.vue'
import Search from '../views/search.vue'
import Login from '../views/login.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      component: Login,
      meta: {
        requiresResponsive: false
      }
    },
    {
      path: '/editor/:md',
      component: Editor,
      meta: {
        requireAuth: true,
        requiresResponsive: false
      }
    },
    {
      path: '/:id/:href',
      component: MarkDown,
      meta: {
        requiresResponsive: true
      }
    },
    {
      path: '/:id',
      component: MarkDown,
      meta: {
        requiresResponsive: true
      }
    },
    {
      path: '/',
      redirect: '/docs'
    }
  ]
})

router.beforeEach(function (to, from, next) {
  const dom = document.getElementById('markdownbody')
  if (dom) {
    dom.scrollTop = 0
  }

  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router