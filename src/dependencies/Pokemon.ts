import { PokemonProfileSearcher } from '@src/modules/pokemons/application/PokemonProfileSearcher'
import { PokemonsSearcher } from '@src/modules/pokemons/application/PokemonsSearcher'
import { ApiPokemonRepository } from '@src/modules/pokemons/infrastructure/ApiPokemonRepository'
import type { Http } from '@src/modules/shared/domain/Http'

export interface ProviderUseCaseGuest {
  pokemonSearcher: PokemonsSearcher
  pokemonProfileSearcher: PokemonProfileSearcher
}

export function providerPokemon(http: Http): ProviderUseCaseGuest {
  const repository = new ApiPokemonRepository(http)
  const pokemonSearcher = new PokemonsSearcher(repository)
  const pokemonProfileSearcher = new PokemonProfileSearcher(repository)
  return {
    pokemonSearcher,
    pokemonProfileSearcher
  }
}
