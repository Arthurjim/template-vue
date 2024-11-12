import { Pokemon } from '../domain/Pokemon'
import type { PokemonRepository } from '../domain/PokemonRepository'

export class PokemonsSearcher {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(): Promise<Pokemon[]> {
    return await this.repository.searchAll()
  }
}
