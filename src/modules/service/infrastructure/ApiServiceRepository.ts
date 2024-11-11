import type { Http } from '@modules/shared/domain/Http'

import type { ServiceRepository } from '../domain/ServiceRepository'
import type { ServiceDTO } from '../domain/dto/ServiceDTO'
import { Language } from '../domain/constant/Language.enum'
import { Service } from '../domain/Service'
import { ServiceZoneHotel } from '../domain/value-object/ServiceZoneHotel'

export class ApiServiceRepository implements ServiceRepository {
  constructor(private readonly http: Http) {}

  async search(zone: ServiceZoneHotel, language: Language): Promise<Service[]> {
    const response = await this.http.get<ServiceDTO[]>(`service-opera/${zone.toZone()}?language=${language}`)
    return response.map((service) =>
      Service.fromPrimitive({
        codeOpera: service.codeOpera,
        name: service.name,
        description: service.description,
        image: service.imageUrl
      })
    )
  }
}
