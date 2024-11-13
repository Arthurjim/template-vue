<script lang="ts" setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import { onMounted, ref, watch } from 'vue'
import { usePokemonStore } from '@stores/Pokemon'
import { storeToRefs } from 'pinia'
import { usePokemon } from '@src/composables/Pokemons'
import router from '@src/router'
import type { PokemonListDTO } from '@src/modules/pokemons/domain/dto/ListPokemonDTO'
const { getAll } = usePokemon()
const { pokemons, pokemonSelected } = storeToRefs(usePokemonStore())

const pokemonTemps = ref<PokemonListDTO[]>([])

const searchPokemon = ref('')

onMounted(async () => {
  await getAll()
  pokemonTemps.value = pokemons.value
})

watch(searchPokemon, () => {
  const pokemonsFilter = pokemons.value.filter((pokemon) => {
    return pokemon.name.includes(searchPokemon.value)
  })
  if (!pokemonsFilter.length) {
    pokemonTemps.value = pokemons.value
    return
  }

  pokemonTemps.value = pokemonsFilter
})

const goPokemon = async (name: string) => {
  pokemonSelected.value = name
  await router.push({ name: 'Pokemon', params: { name } })
}
</script>

<template>
  <section class="m-6 flex gap-6">
    <tpc-search-field v-model="searchPokemon" label="Search" />
  </section>

  <div class="m-6">
    <DataTable :value="pokemonTemps" striped-rows>
      <Column field="name" header="Name"></Column>
      <Column field="url" header="Profile">
        <template #body="slotProps">
          <tpc-button type="secondary" @click="goPokemon(slotProps.data.name)">Profile</tpc-button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<style scoped></style>
