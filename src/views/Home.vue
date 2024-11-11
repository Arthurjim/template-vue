<template>
    <section class="m-6  flex gap-6">
        <tpc-search-field placeholder="Search" v-model="searchPokemon"/>
        <tpc-button @click="search" size="large">Search</tpc-button>
    </section>
</template>

<script setup lang="ts">
    import { ref, inject } from 'vue';
    import type { ProvideUseCasePokemon } from '../dependencies/Pokemon';
    type providerPokemon = ProvideUseCasePokemon | undefined

    const searchPokemon = ref('');
    const search = async () => {
        const provider = inject<providerPokemon>('providerPokemon', undefined)
        if (!provider) return

        const response = await provider.pokemonSearcher.execute()
        console.log(response);
    };
</script>

<style scoped>

</style>