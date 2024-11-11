import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class GuestLastName extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
