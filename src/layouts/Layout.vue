<script setup lang="ts">
import Header from '@components/Header.vue'
</script>

<template>
  <main class="relative flex flex-col min-h-screen">
    <tpc-navigation-bar context="onBrand"/>
    <router-view />
  </main>
</template>

<style lang="scss" scoped></style>
