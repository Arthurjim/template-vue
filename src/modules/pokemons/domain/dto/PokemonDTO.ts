interface Sprites {
  front_default: string
  back_default: string
}
export interface PokemonDTO {
  weight: number
  name: string
  id: number
  height: number
  sprites: Sprites
}
