import type { Primitive } from '@src/modules/pokemons/domain/Pokemon'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const payload = {
    url: '',
    name: ''
  }

  const pokemon: Ref<Primitive> = ref(payload)
  const pokemons: Ref<Primitive[]> = ref([])

  return {
    pokemon,
    pokemons
  }
})
