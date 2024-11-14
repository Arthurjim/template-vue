import type { Http } from '@src/modules/shared/domain/Http'
import type { PokemonRepository } from '../domain/PokemonRepository'
import { Pokemon } from '../domain/Pokemon'
import type { PokemonDTO } from '../domain/dto/PokemonDTO'
import type { PokemonListDTO } from '../domain/dto/ListPokemonDTO'

interface PokemonResponse {
  results: PokemonListDTO[]
}

export class ApiPokemonRepository implements PokemonRepository {
  constructor(private readonly http: Http) {}

  async searchAll(page: number): Promise<PokemonListDTO[]> {
    const response = await this.http.get<PokemonResponse>(`/?limit=100&offset=${page * 10}`)
    return response.results
  }

  async search(name: string): Promise<Pokemon> {
    const response = await this.http.get<PokemonDTO>(`/${name}`)
    return Pokemon.fromPrimitive({
      id: response.id,
      weight: response.weight,
      name: response.name,
      height: response.height,
      sprite: response.sprites.front_default
    })
  }
}
