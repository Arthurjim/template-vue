import { PokemonsSearcher } from '@src/modules/pokemons/application/PokemonsSearcher'
import { ApiPokemonRepository } from '@src/modules/pokemons/infrastructure/ApiPokemonRepository'
import type { Http } from '@src/modules/shared/domain/Http'

export interface ProviderUseCaseGuest {
  pokemonSearcher: PokemonsSearcher
}

export function providerPokemon(http: Http): ProviderUseCaseGuest {
  const repository = new ApiPokemonRepository(http)
  const pokemonSearcher = new PokemonsSearcher(repository)

  return {
    pokemonSearcher
  }
}
