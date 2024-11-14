import type { PokemonListDTO } from './dto/ListPokemonDTO'
import { Pokemon } from './Pokemon'

export interface PokemonRepository {
  search: (name: string) => Promise<Pokemon>
  searchAll: (page: number) => Promise<PokemonListDTO[]>
}
