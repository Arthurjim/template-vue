import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class ServiceName extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
