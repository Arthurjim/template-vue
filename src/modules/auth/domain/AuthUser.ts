import { AggregateRoot } from '@modules/shared/domain/AggregateRoot'

import { AuthUserName } from './value-object/AuthUserName'
import { AuthUserEmail } from './value-object/AuthUserEmail'
import { AuthUserImage } from './value-object/AuthUserImage'
import { AuthUserRole } from './value-object/AuthUserRole'

export interface Primitive {
  name: string
  image: string
  email: string
  roles: string[]
}

export class AuthUser extends AggregateRoot<Primitive> {
  constructor(
    readonly name: AuthUserName,
    readonly image: AuthUserImage,
    readonly email: AuthUserEmail,
    readonly roles: AuthUserRole[]
  ) {
    super()
  }

  static create(primitives: Primitive): AuthUser {
    const name = new AuthUserName(primitives.name)
    const image = new AuthUserImage(primitives.image)
    const email = new AuthUserEmail(primitives.email)
    const roles = primitives.roles.map((role) => new AuthUserRole(role))

    return new AuthUser(name, image, email, roles)
  }

  toPrimitive(): Primitive {
    return {
      name: this.name.value,
      image: this.image.value,
      email: this.email.value,
      roles: this.roles.map((role) => role.value)
    }
  }
}
