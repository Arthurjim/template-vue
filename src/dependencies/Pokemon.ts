import { PokemonSearcher } from "@src/modules/pokemons/application/PokemonSearcher";
import { ApiPokemonRepository } from "@src/modules/pokemons/infrastructure/ApiPokemonRepository";
import type { Http } from "@src/modules/shared/domain/Http";

export interface ProvideUseCasePokemon {
    pokemonSearcher: PokemonSearcher
}

export function providerPokemon(http: Http): ProvideUseCasePokemon{
    const repository = new ApiPokemonRepository(http)
    const pokemonSearcher = new PokemonSearcher(repository)

    return {
        pokemonSearcher
    }
}