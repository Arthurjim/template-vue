import { AggregateRoot } from '@src/modules/shared/domain/AggregateRoot'
import { PokemonWeight } from './value-object/PokemonWeight'
import { PokemonName } from './value-object/PokemonName'
import { PokemonHeight } from './value-object/PokemonHeight'
import { PokemonSprite } from './value-object/PokemonSprite'
import { PokemonId } from './value-object/PokemonId'

export interface Primitive {
  id: number
  name: string
  weight: number
  height: number
  sprite: string
}

export class Pokemon extends AggregateRoot<Primitive> {
  constructor(
    readonly id: PokemonId,
    readonly weight: PokemonWeight,
    readonly name: PokemonName,
    readonly height: PokemonHeight,
    readonly sprite: PokemonSprite
  ) {
    super()
  }

  static fromPrimitive({ id, weight, name, height, sprite }: Primitive): Pokemon {
    return new Pokemon(
      new PokemonId(id),
      new PokemonWeight(weight),
      new PokemonName(name),
      new PokemonHeight(height),
      new PokemonSprite(sprite)
    )
  }

  toPrimitive(): Primitive {
    return {
      id: this.id.value,
      weight: this.weight.value,
      name: this.name.value,
      height: this.height.value,
      sprite: this.sprite.value
    }
  }
}
