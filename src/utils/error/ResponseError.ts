import { ErrorCategory } from '../constant/ErrorCategory'

export interface ErrorMessage {
  code: string
  type?: string
  category: ErrorCategory
  description?: string
}

export interface ResponseError {
  errors: ErrorMessage[]
  stack?: string
}
