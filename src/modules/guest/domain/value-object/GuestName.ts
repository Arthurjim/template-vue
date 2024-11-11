import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class GuestName extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
