<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import GuestForm from '@components/GuestForm.vue'

import { useAuthStore } from '@stores/Auth'

const { user } = storeToRefs(useAuthStore())
</script>

<template>
  <section class="flex flex-grow flex-col gap-20 px-4 items-center justify-center">
    <h1 class="search__title">{{ $t('SearchGuest.welcome') }} {{ user.name }}</h1>
    <GuestForm />
  </section>
</template>

<style lang="scss" scoped>
@use '@assets/styles/tools/mixins' as *;

.search {
  &__title {
    @include typography-display-s();
  }
}
</style>
