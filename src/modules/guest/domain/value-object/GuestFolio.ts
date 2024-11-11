import { NumberValueObject } from '@modules/shared/domain/value-object/NumberValueObject'

export class GuestFolio extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
