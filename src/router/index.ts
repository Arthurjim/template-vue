import { createRouter, createWebHistory } from 'vue-router'
import Routes from './routes'

// import { useAuth } from '@composables/Auth'

const router = createRouter({
  history: createWebHistory(),
  routes: Routes
})

router.beforeEach(async (to, from, next) => {
  /** Navigate to next if middleware is not applied */
  if (typeof to.meta.middleware === 'undefined') {
    return next()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const middleware: any = to.meta.middleware
  const context = {
    to,
    from,
    next
  }

  return middleware[0]({
    ...context
  })
})

router.afterEach((to) => {
  const DEFAULT_TITLE = 'Template Palace'
  document.title = (to.meta.title as string) ?? DEFAULT_TITLE
})

export default router
