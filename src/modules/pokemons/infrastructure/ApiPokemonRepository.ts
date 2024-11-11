import type { Http } from "@src/modules/shared/domain/Http";
import type { PokemonRepository } from "../domain/PokemonRepository";
import { Pokemon } from "../domain/Pokemon";

export class ApiPokemonRepository implements PokemonRepository{
    constructor (private readonly http: Http) {}

    async searchAll(): Promise<Pokemon[]> {
        return await this.http.get<Pokemon[]>('pokemons')
    }

    async search(): Promise<Pokemon> {
        throw new Error('Method not implemented.')
    }
}