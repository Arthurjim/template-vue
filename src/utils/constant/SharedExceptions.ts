import type { Exception } from './Exception'

export const SharedExceptions = {
  UNDEFINED_VALUE_OBJECT: {
    code: '3dba1ef2-c021-4c31-8bab-5123494ed883',
    message: 'Undefined Value Object'
  },
  INVALID_VALUE: {
    code: '5fd5aad5-e160-4c50-a1c8-ea4a5fe28780',
    message: 'Value must be valid'
  },
  EMPTY_VALUE: {
    code: 'f7feec68-0f0a-44a7-9167-c698e13442fd',
    message: 'Not allowed to be empty'
  },
  EMPTY_RESPONSE: {
    code: 'f7feec68-0f0a-44a7-9167-c698e13442fd',
    message: 'Empty response'
  }
} satisfies Record<string, Exception>
