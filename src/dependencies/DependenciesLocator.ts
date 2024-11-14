import AmplifyClient from '@modules/shared/infrastructure/amplify/AmplifyClient'

import { providerAuth } from './Auth'
import { providerPokemon } from './Pokemon'

const http = new AmplifyClient()

export const dependenciesLocator = {
  providerAuth: () => providerAuth(http),
  providerPokemon: () => providerPokemon(http)
}
