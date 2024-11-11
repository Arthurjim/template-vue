export interface ProfileData {
  data: Profile
  errors: string[]
  warnings: string[]
}

export interface Profile {
  apps: string[]
  attributes: ProfileAttributes
  permissions: string[]
  roles: string[]
  menu: ProfileMenu[]
}

export interface ProfileAttributes {
  avatar: string
  domain: boolean
  email: string
  lastName: string
  name: string
}

export interface ProfileMenu {
  children: string
  code: string
  id: string
  module: string
  name: string
  parent: string
}
