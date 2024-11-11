<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { Logger } from '@utils/log/Logger'
import { Hotels } from '@utils/constant/Hotels.enum'

import { useGuestValidation } from '@composables/GuestValidation'
import { useGuest } from '@composables/Guest'

const router = useRouter()

const loading = ref(false)
const openSnackbar = ref(false)

const { hotel, reservation, stateHotel, stateReservation, ensureFormIsValid } = useGuestValidation()
const { getters, reset } = useGuest()

const onSubmit = async () => {
  if (!ensureFormIsValid()) return
  loading.value = true
  try {
    await getters(reservation.value, hotel.value)
    await router.push({ name: 'GuestList' })
  } catch (error) {
    Logger.debug('Error on search guest', error)
    openSnackbar.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  reset()
})
</script>

<template>
  <form class="flex flex-col gap-6 max-w-[416px] w-full" autocomplete="off" @submit.prevent="onSubmit">
    <h3 class="form__title">{{ $t('SearchGuest.search') }}</h3>
    <tpc-select-field
      v-model="hotel"
      :state="stateHotel.state"
      :error-messages="$t(stateHotel.errorMessage, { field: $t('Fields.resorts') })"
      :items="Hotels"
      :label="$t('Fields.resorts')"
    />
    <tpc-text-field
      v-model="reservation"
      :state="stateReservation.state"
      :error-messages="$t(stateReservation.errorMessage, { field: $t('Fields.reservation') })"
      :label="$t('Fields.reservation')"
      only-numbers
    />
    <tpc-button block :loading="loading" :disabled="loading" type="submit"> {{ $t('SearchGuest.button') }} </tpc-button>
  </form>
  <tpc-snackbar v-model="openSnackbar" type="danger" :persistent="false" :message="$t('Error.reservationNotFound')" />
</template>

<style lang="scss" scoped>
@use '@assets/styles/tools/mixins' as *;

.form {
  &__title {
    @include typography-title-l();
  }
}
</style>
