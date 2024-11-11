<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import { useSignatureStore } from '@stores/Signature'

const route = useRoute()
const router = useRouter()

const { signature, termsAndConditions } = storeToRefs(useSignatureStore())

const disabled = computed(() => !termsAndConditions.value || !signature.value)
const onTermsAndConditions = computed(() => route.name === 'TermsConditions')

const onRedirect = () => {
  termsAndConditions.value = false
  if (onTermsAndConditions.value) return
  router.push({ name: 'TermsConditions' })
}

const onUpdate = async (value: boolean) => {
  if (onTermsAndConditions.value) {
    termsAndConditions.value = value
    if (value) {
      await router.push({ name: 'Summary' })
    }
    return
  }
  termsAndConditions.value = value
}

const onClick = async () => {}
</script>

<template>
  <footer class="footer h-[130px] md:h-[197px] w-full">
    <nav class="flex flex-col h-full w-full items-center justify-center gap-7 px-2">
      <div class="flex flex-row justify-start max-w-[416px] w-full">
        <tpc-checkbox :model-value="termsAndConditions" @update:model-value="onUpdate">
          {{ $t('Summary.acceptMessage') }}
        </tpc-checkbox>
        <span :class="{ underline: !onTermsAndConditions, 'pb-[1px] pl-1 cursor-pointer': true }" @click="onRedirect">
          {{ $t('Summary.termsAndConditions') }}
        </span>
      </div>
      <tpc-button
        v-if="!onTermsAndConditions"
        class="max-w-[416px]"
        size="large"
        block
        :state="termsAndConditions"
        type="primary"
        :has-trailing-icon="true"
        trailing-icon="arrow-right"
        :disabled="disabled"
        @click="onClick"
      >
        {{ $t('Summary.roomCharge') }}
      </tpc-button>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;

.footer {
  border-top: 1px solid $color-border-default;
}
</style>
