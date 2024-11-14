<script lang="ts" setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { ref, computed, onMounted } from 'vue'
import { usePokemonStore } from '@stores/Pokemon'
import { storeToRefs } from 'pinia'
import { usePokemon } from '@src/composables/Pokemons'
import router from '@src/router'
import type { PokemonListDTO } from '@src/modules/pokemons/domain/dto/ListPokemonDTO'

// Obtener métodos y referencias del store y composable
const { getAll } = usePokemon()
const { pokemons, pokemonSelected } = storeToRefs(usePokemonStore())

const searchPokemon = ref('')
const isLoading = ref(false)

const fetchPokemons = async () => {
  isLoading.value = true
  await getAll(0)
  isLoading.value = false
}

const filteredPokemons = computed<PokemonListDTO[]>(() => {
  if (!searchPokemon.value) return pokemons.value
  return pokemons.value.filter((pokemon) => pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase()))
})

const goPokemon = async (name: string) => {
  pokemonSelected.value = name
  await router.push({ name: 'Pokemon', params: { name } })
}

onMounted(fetchPokemons)
</script>

<template>
  <section class="m-6 flex gap-6">
    <tpc-search-field v-model="searchPokemon" label="Search" />
  </section>

  <div class="flex justify-center">
    <DataTable
      v-if="filteredPokemons.length"
      :value="filteredPokemons"
      striped-rows
      paginator
      :rows="5"
      table-style="min-width: 50rem"
    >
      <Column field="name" header="Name"></Column>
      <Column field="url" header="Profile">
        <template #body="{ data }">
          <tpc-button type="secondary" @click="goPokemon(data.name)">Profile</tpc-button>
        </template>
      </Column>
    </DataTable>

    <div v-else>
      <span class="message-not-found tpc-t-title-m">Not Found</span>
    </div>
  </div>
</template>

<style scoped>
.message-not-found {
  color: var(--color-background-accent-default);
}
</style>
