import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class AuthUserName extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
