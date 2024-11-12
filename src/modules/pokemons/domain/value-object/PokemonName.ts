import { StringValueObject } from '@src/modules/shared/domain/value-object/StringValueObject'

export class PokemonName extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
