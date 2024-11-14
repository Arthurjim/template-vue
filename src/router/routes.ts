import type { RouteRecordRaw } from 'vue-router'

// import { logged } from './middleware/logged'

import Layout from '@layouts/Layout.vue'

const routerOptions: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: { name: 'Login' },
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@views/Login.vue'),
        meta: {
          // middleware: [logged]
        }
      }
    ]
  },
  {
    path: '/pokemons',
    name: 'Home',
    component: Layout,
    redirect: { name: 'Pokemons' },
    children: [
      {
        path: '',
        name: 'Pokemons',
        component: () => import('@views/PokemonList.vue')
      },
      {
        path: '/pokemons/:name',
        name: 'Pokemon',
        component: () => import('@views/PokemonProfile.vue')
      }
    ]
  }
]

export default routerOptions
