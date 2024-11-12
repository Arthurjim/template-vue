import type { Http } from '@src/modules/shared/domain/Http'
import type { PokemonRepository } from '../domain/PokemonRepository'
import { Pokemon } from '../domain/Pokemon'
import type { PokemonDTO } from '../domain/dto/PokemonDTO'

interface PokemonResponse {
  results: PokemonDTO[]
}

export class ApiPokemonRepository implements PokemonRepository {
  constructor(private readonly http: Http) {}

  async searchAll(): Promise<Pokemon[]> {
    const response = await this.http.get<PokemonResponse>('/')
    return response.results.map((pokemon) => Pokemon.fromPrimitive(pokemon))
  }

  async search(name: string): Promise<Pokemon> {
    const response = await this.http.get(`/${name}`)
    return Pokemon.fromPrimitive(response)
  }
}
