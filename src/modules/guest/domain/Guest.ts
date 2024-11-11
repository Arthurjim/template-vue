import { AggregateRoot } from '@modules/shared/domain/AggregateRoot'

import { GuestHotel } from './value-object/GuestHotel'
import { GuestFolio } from './value-object/GuestFolio'
import { GuestName } from './value-object/GuestName'
import { GuestLastName } from './value-object/GuestLastName'
import { GuestRoom } from './value-object/GuestRoom'
import { GuestResort } from './value-object/GuestResort'

export interface Primitive {
  hotel: string
  folio: number
  name: string
  lastName: string
  room: number
  resort: string
}

export class Guest extends AggregateRoot<Primitive> {
  constructor(
    readonly hotel: GuestHotel,
    readonly folio: GuestFolio,
    readonly name: GuestName,
    readonly lastName: GuestLastName,
    readonly room: GuestRoom,
    readonly resort: GuestResort
  ) {
    super()
  }

  static fromPrimitive({ hotel, folio, name, lastName, room, resort }: Primitive): Guest {
    return new Guest(
      new GuestHotel(hotel),
      new GuestFolio(folio),
      new GuestName(name),
      new GuestLastName(lastName),
      new GuestRoom(room),
      new GuestResort(resort)
    )
  }

  toPrimitive(): Primitive {
    return {
      hotel: this.hotel.value,
      folio: this.folio.value,
      name: this.name.value,
      lastName: this.lastName.value,
      room: this.room.value,
      resort: this.resort.toString()
    }
  }
}
