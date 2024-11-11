import type { AuthRepository } from '@modules/auth/domain/AuthRepository'

import { AuthTypes } from '../../domain/AuthTypes.enum'
import { AuthUserEmail } from '../../domain/value-object/AuthUserEmail'

export class UserAuthenticator {
  constructor(private readonly repository: AuthRepository) {}

  async authenticate(email: string, password: string): Promise<void> {
    const { host } = new URL(window.location.origin)
    const [hostId] = host.split(':')[0].split('.')

    const options = {
      appId: hostId,
      authType: AuthTypes.LDAP
    }

    await this.repository.signIn(new AuthUserEmail(email), password, options)
  }
}
