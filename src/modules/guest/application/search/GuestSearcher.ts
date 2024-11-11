import type { GuestRepository } from '../../domain/GuestRepository'
import { Guest } from '../../domain/Guest'
import { GuestHotel } from '../../domain/value-object/GuestHotel'

export class GuestSearcher {
  constructor(private readonly repository: GuestRepository) {}

  async execute(reservation: number, hotel: string): Promise<Guest[]> {
    return await this.repository.search(reservation, new GuestHotel(hotel))
  }
}
