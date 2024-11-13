import type { Pokemon } from '../domain/Pokemon'
import type { PokemonRepository } from '../domain/PokemonRepository'

export class PokemonProfileSearcher {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(name: string): Promise<Pokemon> {
    return await this.repository.search(name)
  }
}
