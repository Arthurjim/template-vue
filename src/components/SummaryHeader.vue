<script lang="ts" setup>
import CustomIcon from '@components/ui/atoms/CustomIcon.vue'
</script>

<template>
  <header class="header h-20 w-full">
    <nav class="group flex h-full w-full items-center justify-start py-5 px-10">
      <CustomIcon class="mx-auto" name="palace-resorts" height="44px" width="109px" color="none" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;

.header {
  border-bottom: 1px solid $color-border-default;
}
</style>
