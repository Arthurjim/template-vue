<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { Logger } from '@utils/log/Logger'

import GuestItem from '@components/GuestItem.vue'
import BackButton from '@components/ui/atoms/BackButton.vue'

import { useGuest } from '@composables/Guest'

import { useGuestStore } from '@stores/Guest'

const router = useRouter()

const { select } = useGuest()

const { guests } = storeToRefs(useGuestStore())

const onBack = async () => {
  await router.push({ name: 'GuestSearch' })
}

const onClick = async (index: number) => {
  try {
    select(index)
    await router.push({ name: 'AssignMisc' })
  } catch (error) {
    Logger.debug('Error select guest:', error)
  }
}
</script>

<template>
  <BackButton @click="onBack" />
  <section class="flex flex-grow flex-col gap-6 px-4 items-center justify-center">
    <h2 class="list__title">{{ $t('GuestList.results') }}</h2>
    <div class="flex flex-col gap-4 max-w-[416px] w-full">
      <GuestItem
        v-for="(guest, i) in guests"
        :key="i"
        :room="guest.room"
        :last-name="guest.lastName"
        @click="onClick(i)"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@assets/styles/tools/mixins' as *;
.list {
  &__title {
    @include typography-title-l();
    font-weight: 400;
  }
}
</style>
