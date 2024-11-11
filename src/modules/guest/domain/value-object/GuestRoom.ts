import { NumberValueObject } from '@modules/shared/domain/value-object/NumberValueObject'

export class GuestRoom extends NumberValueObject {
  constructor(value: number) {
    super(value)
  }
}
