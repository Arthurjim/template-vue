import { ValueObject } from './ValueObject'
import { ImageValidation } from '../utils/ImageValidations'

export abstract class ImageValueObject extends ValueObject<string> {
  constructor(readonly value: string) {
    super(value)
    this.ensureIsValidImage(value)
  }

  protected ensureIsValidImage(value: string): void {
    if (value !== '') {
      if (!ImageValidation.isImageUrl(value)) {
        throw new Error(`The value <${value}> is not a valid image`)
      }
    }
  }
}
