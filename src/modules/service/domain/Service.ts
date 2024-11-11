import { AggregateRoot } from '@modules/shared/domain/AggregateRoot'

import { ServiceCodeOpera } from './value-object/ServiceCodeOpera'
import { ServiceName } from './value-object/ServiceName'
import { ServiceDescription } from './value-object/ServiceDescription'
import { ServiceImage } from './value-object/ServiceImage'

export interface Primitive {
  codeOpera: string
  name: string
  description: string
  image: string
}

export class Service extends AggregateRoot<Primitive> {
  constructor(
    readonly codeOpera: ServiceCodeOpera,
    readonly name: ServiceName,
    readonly description: ServiceDescription,
    readonly image: ServiceImage
  ) {
    super()
  }

  static fromPrimitive({ codeOpera, name, description, image }: Primitive): Service {
    return new Service(
      new ServiceCodeOpera(codeOpera),
      new ServiceName(name),
      new ServiceDescription(description),
      new ServiceImage(image)
    )
  }

  toPrimitive(): Primitive {
    return {
      codeOpera: this.codeOpera.value,
      name: this.name.value,
      description: this.description.value,
      image: this.image.value
    }
  }
}
