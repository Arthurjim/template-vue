import { provide } from 'vue'

import { dependenciesLocator } from '@dependencies/DependenciesLocator'

export function useDependencies(): void {
  provide('providerAuth', dependenciesLocator.providerAuth())
  provide('providerGuest', dependenciesLocator.providerGuest())
  provide('providerService', dependenciesLocator.providerService())
  provide('providerPokemon', dependenciesLocator.providerPokemon())
}
