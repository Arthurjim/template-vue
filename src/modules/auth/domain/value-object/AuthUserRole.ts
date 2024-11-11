import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class AuthUserRole extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
