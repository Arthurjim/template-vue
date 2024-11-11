import { ImageValueObject } from '@modules/shared/domain/value-object/ImageValueObject'

export class AuthUserImage extends ImageValueObject {
  constructor(value: string) {
    super(value)
  }
}
