import type { PokemonRepository } from '../domain/PokemonRepository'

export class PokemonProfileSearcher {
  constructor(private readonly repository: PokemonRepository) {}

  async execute(name: string) {
    return await this.repository.search(name)
  }
}
