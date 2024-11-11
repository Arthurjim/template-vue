import { SharedExceptions } from '../constant/SharedExceptions'
import { ValueObjectError } from '../error/ValueObjectError'

export type Primitive = string | string | number | boolean | boolean | Date

export abstract class ValueObject<T extends Primitive> {
  readonly value: T

  constructor(value: T) {
    this.value = value
    this.ensureValueIsDefined(value)
  }

  private ensureValueIsDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new ValueObjectError(SharedExceptions.UNDEFINED_VALUE_OBJECT)
    }
  }

  equals(other: ValueObject<T>): boolean {
    return other.constructor.name === this.constructor.name && other.value === this.value
  }

  toString(): string {
    return String(this.value)
  }
}
