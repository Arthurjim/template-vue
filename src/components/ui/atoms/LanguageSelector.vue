<script lang="ts" setup>
import { Locales } from '@src/locales'

import { useLanguage } from '@composables/Language'

const { language, setLanguage } = useLanguage()

const handleLanguageChange = (event: Event) => {
  setLanguage((event.target as HTMLSelectElement).value)
}
</script>

<template>
  <div class="grid">
    <select
      v-model="language"
      class="selector row-start-1 col-start-1 cursor-pointer pr-1 focus:outline-none"
      @change="handleLanguageChange"
    >
      <option :value="Locales.ES">ES</option>
      <option :value="Locales.EN">EN</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.selector {
  @include typography-label-s();
  color: $color-foreground-default;
}
</style>
