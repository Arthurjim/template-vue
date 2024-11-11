<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import BackButton from '@components/ui/atoms/BackButton.vue'
import MiscSearch from '@components/MiscSearch.vue'
import MiscDialog from '@components/MiscDialog.vue'

const router = useRouter()

const showModal = ref(false)

const onSelect = () => {
  showModal.value = true
}

const onBack = async () => {
  await router.push({ name: 'AssignMisc' })
}
</script>

<template>
  <BackButton @click="onBack" />
  <section class="miscellaneous flex flex-col gap-6 px-4 items-center justify-center">
    <h1 class="miscellaneous__title">{{ $t('Miscellaneous.searchTitle') }}</h1>
    <MiscSearch @select="onSelect" />
  </section>
  <MiscDialog v-model="showModal" />
</template>

<style lang="scss" scoped>
@use '@assets/styles/tools/mixins' as *;

.miscellaneous {
  margin-top: 200px;
  height: calc(100vh - 200px);

  &__title {
    @include typography-title-l();
    font-weight: 400;
  }
}
</style>
