import type { RouteRecordRaw } from 'vue-router'

// import { logged } from './middleware/logged'

import Layout from '@layouts/Layout.vue'

const routerOptions: RouteRecordRaw[] = [
  {
    path: '/',
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
        path: 'pokemon/:name',
        name: 'Pokemon',
        component: () => import('@views/PokemonProfile.vue')
      }
    ]
  }
]

export default routerOptions
