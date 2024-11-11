import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

export class ServiceDescription extends StringValueObject {
  constructor(value: string) {
    super(value)
  }
}
