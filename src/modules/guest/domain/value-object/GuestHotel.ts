import { StringValueObject } from '@modules/shared/domain/value-object/StringValueObject'

import { Hotels } from '@utils/constant/Hotels.enum'

export class GuestHotel extends StringValueObject {
  constructor(value: string) {
    super(value)
  }

  toString(): string {
    const entries = Object.entries(Hotels)
    for (const [code, name] of entries) {
      if (name === this.value) {
        return code
      }
    }
    return ''
  }
}
