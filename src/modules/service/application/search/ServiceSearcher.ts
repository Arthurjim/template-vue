import type { ServiceRepository } from '../../domain/ServiceRepository'

import { Service } from '../../domain/Service'
import { Language } from '../../domain/constant/Language.enum'
import { ServiceZoneHotel } from '../../domain/value-object/ServiceZoneHotel'

export class ServiceSearcher {
  constructor(private readonly repository: ServiceRepository) {}

  async execute(zone: string, language: string): Promise<Service[]> {
    return await this.repository.search(new ServiceZoneHotel(zone), language as Language)
  }
}
