import type { PokemonListDTO } from '@src/modules/pokemons/domain/dto/ListPokemonDTO'
import type { Primitive } from '@src/modules/pokemons/domain/Pokemon'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const usePokemonStore = defineStore('pokemon', () => {
  const payload = {
    id: 0,
    name: '',
    weight: 0,
    height: 0,
    sprite: ''
  }
  const pokemonSelected = ref('')
  const pokemonStorage = sessionStorage.getItem('pokemon')

  const parsedPokemon = pokemonStorage ? JSON.parse(pokemonStorage) : payload
  const pokemon: Ref<Primitive> = ref(parsedPokemon)
  const pokemons: Ref<PokemonListDTO[]> = ref([])

  return {
    pokemon,
    pokemons,
    pokemonSelected
  }
})
