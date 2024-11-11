import { Guest } from './Guest'

import { GuestHotel } from './value-object/GuestHotel'

export interface GuestRepository {
  search: (reservation: number, hotel: GuestHotel) => Promise<Guest[]>
}
