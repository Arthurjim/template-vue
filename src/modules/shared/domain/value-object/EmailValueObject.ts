import { ValueObject } from './ValueObject'
import { EmailValidations } from '../utils/EmailValidations'

export abstract class EmailValueObject extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value)
    this.ensureIsValidEmail(value)
  }

  protected ensureIsValidEmail(value: string): void {
    if (!EmailValidations.isValid(value)) {
      throw new Error(`The value <${value}> is not a valid image`)
    }
  }
}
