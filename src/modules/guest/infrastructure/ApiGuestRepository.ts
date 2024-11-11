import type { Http } from '@modules/shared/domain/Http'

import { Logger } from '@utils/log/Logger'

import type { GuestRepository } from '../domain/GuestRepository'
import type { GuestDTO } from '../domain/dto/GuestDTO'
import { Guest } from '../domain/Guest'
import { GuestHotel } from '../domain/value-object/GuestHotel'

export class ApiGuestRepository implements GuestRepository {
  constructor(private readonly http: Http) {}

  async search(reservation: number, hotel: GuestHotel): Promise<Guest[]> {
    Logger.debug('reservation-infrastructure', reservation)
    const response = await this.http.get<GuestDTO[]>(`guest/${hotel.toString()}/${reservation}`)
    return response.map((guest) =>
      Guest.fromPrimitive({
        ...guest,
        resort: guest.hotel
      })
    )
  }
}
