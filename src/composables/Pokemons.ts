import { inject } from 'vue'
import type { ProviderUseCaseGuest } from '../dependencies/Pokemon'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@stores/Pokemon'
import { Logger } from '@src/utils/log/Logger'

export interface UsePokemon {
  getters: () => Promise<void>
}

type ProviderPokemon = ProviderUseCaseGuest | undefined

export function usePokemon(): UsePokemon {
  const provider = inject<ProviderPokemon>('providerPokemon', undefined)
  const { pokemon, pokemons } = storeToRefs(usePokemonStore())
  const getters = async () => {
    if (!provider) return
    pokemons.value = []
    try {
      const response = await provider.pokemonSearcher.execute()

      if (response.length > 0) {
        pokemons.value = response.map((pokemon) => pokemon.toPrimitive())
      }
    } catch (error) {
      Logger.debug('error', error)
      throw error
    }
  }

  return {
    getters
  }
}
