<script lang="ts" setup>
import GuestResume from '@components/GuestResume.vue'
import GuestSignature from '@components/GuestSignature.vue'

import { useSummary } from '@composables/Summary'

useSummary()
</script>

<template>
  <section class="flex h-full px-4 items-center justify-center">
    <div class="flex flex-col gap-3 max-w-[416px] w-full">
      <GuestResume />
      <GuestSignature />
    </div>
  </section>
</template>
