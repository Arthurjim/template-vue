import type { PokemonListDTO } from '../domain/dto/ListPokemonDTO'
import type { PokemonRepository } from '../domain/PokemonRepository'

export class PokemonsSearcher {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(): Promise<PokemonListDTO[]> {
    return await this.repository.searchAll()
  }
}
