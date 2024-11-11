<script setup lang="ts">
import { useDependencies } from '@composables/Dependencies'

useDependencies()
</script>

<template>
  <div theme="palace-resorts" class="mx-auto selection:bg-primary selection:text-secondary">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: var(--color-background-default);
}
</style>
