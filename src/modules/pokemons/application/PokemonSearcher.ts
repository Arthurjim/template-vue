import { Pokemon } from "../domain/Pokemon";
import type { PokemonRepository } from "../domain/PokemonRepository";

export class PokemonSearcher {
    constructor(private readonly repository: PokemonRepository){}

    async execute(id: number): Promise<Pokemon[]> {
        return await this.repository.searchAll()
    }
}