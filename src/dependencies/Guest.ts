import type { Http } from '@modules/shared/domain/Http'

import { GuestSearcher } from '@modules/guest/application/search/GuestSearcher'
import { ApiGuestRepository } from '@modules/guest/infrastructure/ApiGuestRepository'

export interface ProviderUseCaseGuest {
  guestSearcher: GuestSearcher
}

export function providerGuest(http: Http): ProviderUseCaseGuest {
  const repository = new ApiGuestRepository(http)

  const guestSearcher = new GuestSearcher(repository)

  return {
    guestSearcher
  }
}
