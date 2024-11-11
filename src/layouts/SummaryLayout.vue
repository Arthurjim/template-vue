<script setup lang="ts">
import SummaryHeader from '@components/SummaryHeader.vue'
import SummaryFooter from '@components/SummaryFooter.vue'
</script>

<template>
  <div class="grid min-h-screen">
    <SummaryHeader />
    <main class="py-2">
      <router-view />
    </main>
    <SummaryFooter />
  </div>
</template>

<style lang="scss" scoped>
div {
  grid-template-rows: auto 1fr auto;
}
</style>
