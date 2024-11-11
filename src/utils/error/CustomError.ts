import type { Exception } from './Exception'
import type { ResponseError } from './ResponseError'

export interface CustomError {
  exceptions: Exception[]
  name: string
  format(): ResponseError
  toString(): string
}
