import { inject } from 'vue'
import type { ProviderUseCaseGuest } from '../dependencies/Pokemon'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@stores/Pokemon'
import { Logger } from '@src/utils/log/Logger'

export interface UsePokemon {
  getAll: (page: number) => Promise<void>
  getProfile: (name: string) => Promise<void>
}

type ProviderPokemon = ProviderUseCaseGuest | undefined

export function usePokemon(): UsePokemon {
  const provider = inject<ProviderPokemon>('providerPokemon', undefined)
  const { pokemons, pokemon } = storeToRefs(usePokemonStore())
  const getAll = async (page: number) => {
    if (!provider) return
    pokemons.value = []
    try {
      const response = await provider.pokemonSearcher.execute(page)

      pokemons.value = response
    } catch (error) {
      Logger.debug('error', error)
      throw error
    }
  }

  const getProfile = async (name: string) => {
    if (!provider) return
    try {
      const response = await provider.pokemonProfileSearcher.execute(name)
      pokemon.value = response.toPrimitive()
      Logger.debug('response', response)
    } catch (error) {
      Logger.debug('error', error)
      throw error
    }
  }

  return {
    getAll,
    getProfile
  }
}
