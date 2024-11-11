import { ImageValueObject } from '@modules/shared/domain/value-object/ImageValueObject'

export class ServiceImage extends ImageValueObject {
  constructor(value: string) {
    super(value)
  }
}
