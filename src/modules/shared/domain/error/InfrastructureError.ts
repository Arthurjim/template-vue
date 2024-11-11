import { ErrorCategory } from './ErrorCategory'
import type { Exception } from './Exception'

import { CustomErrorAbstractFactory } from './CustomErrorAbstractFactory'

export class InfrastructureError extends CustomErrorAbstractFactory {
  protected category: ErrorCategory = ErrorCategory.INFRASTRUCTURE

  readonly name = 'INFRASTRUCTURE ERROR'

  constructor(exceptions: Exception | Exception[]) {
    super(exceptions)
  }
}
