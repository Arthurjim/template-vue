import { ValueObject } from './ValueObject'

export abstract class DateValueObject extends ValueObject<Date> {
  constructor(readonly value: Date) {
    super(value)
    this.ensureIsValidDate(value)
  }

  ensureIsValidDate(date: Date): void {
    if (isNaN(date.getTime())) {
      throw new Error('ValidDate must be a valid date')
    }
  }

  toISOString(): string {
    return this.value.toISOString().split('T')[0]
  }

  isBefore(date: Date): boolean {
    return this.value < date
  }

  isAfter(date: Date): boolean {
    return this.value > date
  }

  isEqual(date: Date): boolean {
    return this.value.getTime() === date.getTime()
  }
}
