<script lang="ts" setup>
import { useRouter } from 'vue-router'

import BackButton from '@components/ui/atoms/BackButton.vue'
import TermsAndConditionsCard from '@components/TermsAndConditionsCard.vue'

const router = useRouter()

const onBack = () => {
  router.push({ name: 'Summary' })
}
</script>

<template>
  <BackButton @click="onBack" />
  <section class="flex flex-grow flex-col px-4 items-center justify-center h-full">
    <div class="flex flex-col gap-4 max-w-[416px] w-full">
      <TermsAndConditionsCard />
    </div>
  </section>
</template>
