<template>
  <div class="flex justify-center items-center pt-6">
    <Card style="width: 55rem; overflow: hidden">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
      </template>
      <template #title>Advanced Card</template>
      <template #subtitle>Card subtitle</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { usePokemon } from '@src/composables/Pokemons'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePokemonStore } from '@src/stores/Pokemon'
import { Card, Button } from 'primevue'
const { pokemonSelected } = storeToRefs(usePokemonStore())

const { getProfile } = usePokemon()

onMounted(() => {
  if (pokemonSelected.value) {
    getProfile(pokemonSelected.value)
  }
})
</script>
<style scoped></style>
