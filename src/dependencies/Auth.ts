import type { Http } from '@modules/shared/domain/Http'

import { ApiAuthRepository } from '@modules/auth/infrastructure/ApiAuthRepository'

import { UserAuthenticator } from '@modules/auth/application/user-authenticator/UserAuthenticator'

import { ProfileGetter } from '@modules/auth/application/get-profile/ProfileGetter'

export interface ProviderUseCaseAuth {
  userAuthenticator: UserAuthenticator
  profileGetter: ProfileGetter
}

export function providerAuth(http: Http): ProviderUseCaseAuth {
  const repository = new ApiAuthRepository(http)
  const userAuthenticator = new UserAuthenticator(repository)
  const profileGetter = new ProfileGetter(repository)

  return {
    userAuthenticator,
    profileGetter
  }
}
