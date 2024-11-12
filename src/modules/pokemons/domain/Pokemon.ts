import { AggregateRoot } from '@src/modules/shared/domain/AggregateRoot'
import { PokemonUrl } from './value-object/PokemonUrl'
import { PokemonName } from './value-object/PokemonName'

export interface Primitive {
  url: string
  name: string
}

export class Pokemon extends AggregateRoot<Primitive> {
  constructor(readonly url: PokemonUrl, readonly name: PokemonName, image: url) {
    super()
  }

  static fromPrimitive({ url, name }: Primitive): Pokemon {
    return new Pokemon(new PokemonUrl(url), new PokemonName(name))
  }

  toPrimitive(): Primitive {
    return {
      url: this.url.value,
      name: this.name.value
    }
  }
}
