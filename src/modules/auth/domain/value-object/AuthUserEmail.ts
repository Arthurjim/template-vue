import { EmailValueObject } from '@modules/shared/domain/value-object/EmailValueObject'
import { ValueObjectError } from '@modules/shared/domain/error/ValueObjectError'
import Exceptions from '../error/Exceptions'

export class AuthUserEmail extends EmailValueObject {
  constructor(value: string) {
    super(value)
  }

  ensureIsValidDomain(domains: string[], dueDate: number): boolean {
    if (dueDate < new Date().getTime()) {
      throw new ValueObjectError(Exceptions.DUE_DATE_EXPIRED)
    }

    const regexTemplateString = `[^@ \t\r\n]+(${domains.map((domain) => `${domain}`)})+.[^@ \t\r\n]`.replaceAll(
      ',',
      '|'
    )
    const regex = new RegExp(regexTemplateString)

    return regex.test(this.value)
  }
}
