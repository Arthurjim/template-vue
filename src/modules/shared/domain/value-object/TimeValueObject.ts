import { ValueObject } from './ValueObject'

export abstract class TimeValueObject extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value)
    this.ensureIsValidTime(value)
  }

  ensureIsValidTime(time: string): void {
    const timeFormat = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/
    if (!timeFormat.test(time)) {
      throw new Error('Time must be in the format HH:MM:SS, where HH is 00-23, MM and SS are 00-59')
    }
  }
}
