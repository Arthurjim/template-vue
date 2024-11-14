<script setup lang="ts">
import { usePokemon } from '@src/composables/Pokemons'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@src/stores/Pokemon'
import { Card } from 'primevue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { pokemonSelected, pokemon } = storeToRefs(usePokemonStore())

const { getProfile, resetPokemon } = usePokemon()

onMounted(() => {
  if (pokemonSelected.value) {
    getProfile(pokemonSelected.value)
  }
})

const goHome = async () => {
  resetPokemon()
  await router.push({ name: 'Home' })
}
</script>

<template>
  <Card style="width: 55rem; overflow: hidden">
    <template #header>
      <div class="flex justify-center">
        <img v-if="pokemon.sprite" alt="user header" :src="pokemon.sprite" />
        <TpcSkeleton v-else type="rectangle" class="tpc-flex tpc-mb-2" />
      </div>
    </template>
    <template #title>
      <div class="flex justify-center">
        <span class="tpc-t-title-m">{{ pokemon.name }}</span>
      </div>
    </template>
    <template #content>
      <div class="flex justify-center my-3">
        <span class="mr-1">{{ $t('CardPokemon.Weight') }}:</span>
        <span>{{ pokemon.weight }}</span>
      </div>
      <div class="flex justify-center">
        <span class="mr-1">{{ $t('CardPokemon.Height') }}:</span>
        <span>{{ pokemon.height }} </span>
      </div>
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

<style scoped></style>
