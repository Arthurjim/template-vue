import { Pokemon } from './Pokemon'

export interface PokemonRepository {
  search: (name: string) => Promise<Pokemon>
  searchAll: () => Promise<Pokemon[]>
}
