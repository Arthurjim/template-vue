import { v4 as uuid, validate } from 'uuid'
import { ValueObject } from './ValueObject'

export class UuidValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value)
    this.ensureIsValidUuid(value)
  }

  static random(): UuidValueObject {
    return new UuidValueObject(uuid())
  }

  private ensureIsValidUuid(uuid: string): void {
    if (!validate(uuid)) {
      throw new Error('Invalid UUID')
    }
  }
}
