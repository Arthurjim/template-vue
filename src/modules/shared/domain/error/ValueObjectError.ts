import { ErrorCategory } from './ErrorCategory'
import type { Exception } from './Exception'

import { CustomErrorAbstractFactory } from './CustomErrorAbstractFactory'

export class ValueObjectError extends CustomErrorAbstractFactory {
  protected category: ErrorCategory = ErrorCategory.DOMAIN

  name = 'VALUE OBJECT ERROR'

  constructor(exceptions: Exception | Exception[]) {
    super(exceptions)
  }
}
