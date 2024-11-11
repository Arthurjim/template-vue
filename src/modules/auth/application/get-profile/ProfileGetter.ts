import type { AuthUser } from '../../domain/AuthUser'
import type { AuthRepository } from '../../domain/AuthRepository'

export class ProfileGetter {
  constructor(private readonly repository: AuthRepository) {}

  async getter(): Promise<AuthUser> {
    return await this.repository.getProfile()
  }
}
