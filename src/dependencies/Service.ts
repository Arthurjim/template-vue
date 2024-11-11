import type { Http } from '@modules/shared/domain/Http'

import { ServiceSearcher } from '@modules/service/application/search/ServiceSearcher'
import { ApiServiceRepository } from '@modules/service/infrastructure/ApiServiceRepository'

export interface ProviderUseCaseService {
  serviceSearcher: ServiceSearcher
}

export function providerService(http: Http): ProviderUseCaseService {
  const repository = new ApiServiceRepository(http)

  const serviceSearcher = new ServiceSearcher(repository)

  return {
    serviceSearcher
  }
}
