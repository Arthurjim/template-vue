import { StringValueObject } from '@src/modules/shared/domain/value-object/StringValueObject'

export class PokemonSprite extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
