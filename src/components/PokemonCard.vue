<template>
  <Card style="width: 55rem; overflow: hidden">
    <template #header>
      <div class="flex justify-center">
        <img v-if="pokemon.sprite" alt="user header" :src="pokemon.sprite" />
        <TpcSkeleton v-else type="rectangle" class="tpc-flex tpc-mb-2" />
      </div>
    </template>
    <template #title>{{ pokemon.name }}</template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">Weight: {{ pokemon.weight }}</p>
      <p class="m-0">height: {{ pokemon.height }}</p>
    </template>
    <template #footer>
      <div class="flex gap-4 mt-1">
        <tpc-button block type="secondary" has-leading-icon leading-icon="arrow-left" @click="goHome">
          Back
        </tpc-button>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { usePokemon } from '@src/composables/Pokemons'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@src/stores/Pokemon'
import { Card } from 'primevue'
import router from '@src/router'
const { pokemonSelected, pokemon } = storeToRefs(usePokemonStore())

const { getProfile } = usePokemon()

onMounted(() => {
  if (pokemonSelected.value) {
    getProfile(pokemonSelected.value)
  }
})

const goHome = async () => {
  await router.push({ name: 'Home' })
}
</script>

<style scoped></style>
