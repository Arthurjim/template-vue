import { AuthUser } from './AuthUser'
import { AuthTypes } from './AuthTypes.enum'
import { AuthUserEmail } from './value-object/AuthUserEmail'

export interface Options {
  appId: string
  authType: AuthTypes
}

export interface AuthRepository {
  signIn: (email: AuthUserEmail, password: string, options: Options) => Promise<void>
  getProfile: () => Promise<AuthUser>
}
