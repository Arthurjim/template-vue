import AmplifyClient from '@modules/shared/infrastructure/amplify/AmplifyClient'

import { providerAuth } from './Auth'
import { providerGuest } from './Guest'
import { providerService } from './Service'
import { providerPokemon } from './Pokemon'

const http = new AmplifyClient()

export const dependenciesLocator = {
  providerAuth: () => providerAuth(http),
  providerGuest: () => providerGuest(http),
  providerService: () => providerService(http),
  providerPokemon: () => providerPokemon(http)
}
