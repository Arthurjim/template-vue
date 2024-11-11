<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

import Accordion from '@components/ui/molecules/Accordion.vue'

import { useGuestStore } from '@stores/Guest'

const { guest } = storeToRefs(useGuestStore())

const guestName = computed(() => `${guest.value.name} ${guest.value.lastName}`)
</script>

<template>
  <Accordion open>
    <template #header>
      <h2 class="guest-information__title">{{ guestName }}</h2>
    </template>
    <template #content>
      <div class="flex flex-col gap-4 w-full">
        <div class="flex flex-col">
          <h3 class="guest-information__label">{{ $t('GuestInformation.resort') }}</h3>
          <p class="guest-information__value">{{ guest.resort }}</p>
        </div>
        <div class="flex flex-col">
          <h3 class="guest-information__label">{{ $t('GuestInformation.reservation') }}</h3>
          <p class="guest-information__value">{{ guest.folio }}</p>
        </div>
        <div class="flex flex-col">
          <h3 class="guest-information__label">{{ $t('GuestInformation.room') }}</h3>
          <p class="guest-information__value">{{ guest.room }}</p>
        </div>
      </div>
    </template>
  </Accordion>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

guest-information {
  &__title {
    @include typography-body-m();
    color: $color-foreground-default;
  }

  &__label {
    @include typography-body-s();
    color: $color-foreground-default;
  }

  &__value {
    @include typography-body-m();
    color: $color-foreground-default;
  }
}
</style>
