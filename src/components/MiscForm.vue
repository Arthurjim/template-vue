<script lang="ts" setup>
import { ref, defineExpose } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { useServiceStore } from '@stores/Service'

const router = useRouter()
const { service, misc } = storeToRefs(useServiceStore())

const notes = ref('')
const amount = ref(misc.value.amount > 0 ? misc.value.amount : null)
const stateAmount = ref({
  state: 'enabled',
  errorMessage: 'Validations.required'
})

const ensureFormIsValid = (): boolean => {
  if (Number(amount.value) <= 0) {
    stateAmount.value = { state: 'error', errorMessage: 'Validations.required' }
    return false
  }
  stateAmount.value = { state: 'enabled', errorMessage: 'Validations.required' }
  return true
}

const onSubmit = async (): Promise<boolean> => {
  if (!ensureFormIsValid()) return false

  misc.value = {
    ...service.value,
    amount: Number(amount.value),
    notes: notes.value
  }
  sessionStorage.setItem('misc', JSON.stringify(misc.value))

  await router.push({ name: 'AssignMisc' })
  return true
}

defineExpose({
  onSubmit
})
</script>

<template>
  <form class="flex flex-col gap-[26px] size-full" @submit.prevent="onSubmit">
    <h2 class="misc-form__name">{{ service.name }}</h2>
    <div class="flex flex-col">
      <h3 class="misc-form__code">{{ $t('Miscellaneous.codeOpera') }}</h3>
      <h2 class="misc-form__name">{{ service.codeOpera }}</h2>
    </div>
    <tpc-text-field
      v-model="amount"
      :label="$t('Fields.amount')"
      prefix="$"
      :state="stateAmount.state"
      :error-messages="$t(stateAmount.errorMessage, { field: $t('Fields.amount') })"
      only-numbers
    />
    <tpc-text-area v-model="notes" :label="$t('Fields.notes')" :has-character-counter="false" />
  </form>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.misc-form {
  &__name {
    @include typography-body-m();
    font-weight: 500;
    color: $color-foreground-default;
  }

  &__code {
    @include typography-body-xs();
    color: $color-foreground-weak;
  }
}
</style>
