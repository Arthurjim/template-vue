import { signIn, fetchAuthSession, confirmSignIn } from 'aws-amplify/auth'

import type { Http } from '@modules/shared/domain/Http'
import { InfrastructureError } from '@modules/shared/domain/error/InfrastructureError'

import { AuthUser } from '../domain/AuthUser'
import type { AuthUserEmail } from '../domain/value-object/AuthUserEmail'
import type { DomainData, Domains } from '../domain/dto/DomainDTO'
import type { ProfileData } from '../domain/dto/ProfileDTO'
import type { AuthRepository, Options } from '../domain/AuthRepository'
import { AuthTypes } from '../domain/AuthTypes.enum'
import Exceptions from '../domain/error/Exceptions'
import { Logger } from '@src/utils/log/Logger'

export class ApiAuthRepository implements AuthRepository {
  constructor(private readonly http: Http) {}

  async signIn(email: AuthUserEmail, password: string, options: Options): Promise<void> {
    const { domains, dueDate } = await this.getDomains()

    const isUserDomain = email.ensureIsValidDomain(domains, dueDate)

    // await signIn({
    //   username: email.value,
    //   password,
    //   options: {
    //     clientMetadata: {
    //       appId: options.appId
    //     }
    //   }
    // })
  }

  async getProfile(): Promise<AuthUser> {
    const { idToken } = (await fetchAuthSession()).tokens ?? {}
    Logger.debug('idToken: ', idToken)
    const profile = await this.http.get<ProfileData>('profile', {
      apiName: 'auth',
      headers: {
        Authorization: `Bearer ${idToken?.toString()}`
      }
    })

    return AuthUser.create({
      name: `${profile.data.attributes.name} ${profile.data.attributes.lastName}`,
      image: profile.data.attributes.avatar,
      email: profile.data.attributes.email,
      roles: profile.data.roles
    })
  }

  private async getDomains(): Promise<Domains> {
    const response = await this.http.get<DomainData>('domains', {
      apiName: 'auth',
      headers: {}
    })

    return response.data
  }
}
