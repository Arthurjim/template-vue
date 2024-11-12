import type { RouteRecordRaw } from 'vue-router'

// import { logged } from './middleware/logged'
import { auth } from './middleware/auth'

import Layout from '@layouts/Layout.vue'
import SummaryLayout from '@layouts/SummaryLayout.vue'

const routerOptions: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Login' },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@views/Home.vue')
        // meta: {
        //   middleware: [logged]
        // }
      },
      {
        path: 'pokemon/:name',
        name: 'Pokemon',
        component: () => import('@views/Pokemon.vue')
      }
    ]
  },
  {
    path: '/guest',
    name: 'GuestLayout',
    component: Layout,
    meta: {
      middleware: [auth]
    },
    redirect: { name: 'GuestSearch' },
    children: [
      {
        path: 'search',
        name: 'GuestSearch',
        component: () => import('@views/Guest.vue')
      },
      {
        path: 'list',
        name: 'GuestList',
        component: () => import('@views/GuestList.vue')
      },
      {
        path: 'assign',
        name: 'AssignMisc',
        component: () => import('@views/AssignMisc.vue')
      },
      {
        path: 'miscellaneous',
        name: 'Miscellaneous',
        component: () => import('@views/Miscellaneous.vue')
      }
    ]
  },
  {
    path: '/summary',
    name: 'SummaryLayout',
    component: SummaryLayout,
    children: [
      {
        path: '',
        name: 'Summary',
        component: () => import('@views/Summary.vue')
      },
      {
        path: 'terms-and-conditions',
        name: 'TermsConditions',
        component: () => import('@views/TermsConditions.vue')
      }
    ]
  }
]

export default routerOptions
