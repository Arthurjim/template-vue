import { ErrorCategory } from './ErrorCategory'
import type { Exception } from './Exception'

import { CustomErrorAbstractFactory } from './CustomErrorAbstractFactory'

export class ApplicationError extends CustomErrorAbstractFactory {
  protected category: ErrorCategory = ErrorCategory.APPLICATION

  readonly name = 'APPLICATION ERROR'

  constructor(exceptions: Exception | Exception[]) {
    super(exceptions)
  }
}
