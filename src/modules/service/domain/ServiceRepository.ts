import type { Language } from './constant/Language.enum'
import { Service } from './Service'
import { ServiceZoneHotel } from './value-object/ServiceZoneHotel'

export interface ServiceRepository {
  search: (zone: ServiceZoneHotel, language: Language) => Promise<Service[]>
}
