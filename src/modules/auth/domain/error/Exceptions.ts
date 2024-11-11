import type { Exception } from '@modules/shared/domain/error/Exception'

export default {
  USERNAME_OR_PASSWORD_ERROR: {
    code: '1658d8e0-6d40-4b46-8135-6062193225aa',
    message: 'Username or password is incorrect'
  },
  DUE_DATE_EXPIRED: {
    code: 'b1c1b6e9-3b0d-4b9e-8d3b-9b3c9b1d9b8d',
    message: 'Due date has expired'
  }
} satisfies Record<string, Exception>
