import { provide } from 'vue'

import { dependenciesLocator } from '@dependencies/DependenciesLocator'

export function useDependencies(): void {
  provide('providerAuth', dependenciesLocator.providerAuth())
  provide('providerPokemon', dependenciesLocator.providerPokemon())
}
