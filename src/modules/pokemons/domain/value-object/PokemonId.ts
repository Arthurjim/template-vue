import { NumberValueObject } from '@src/modules/shared/domain/value-object/NumberValueObject'

export class PokemonId extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
