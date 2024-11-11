<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { CanvasSignatureRef } from '@selemondev/vue3-signature-pad'

import SignaturePad from '@components/ui/atoms/SignaturePad.vue'
import CustomIcon from '@components/ui/atoms/CustomIcon.vue'

import { useSignatureStore } from '@stores/Signature'

const signatureRef = ref<CanvasSignatureRef>()
const { signature } = storeToRefs(useSignatureStore())

const onClear = () => {
  signatureRef.value?.clearCanvas && signatureRef.value.clearCanvas()
  signature.value = undefined
}

const onSignature = (signatureData: string) => {
  signature.value = signatureData
}
</script>

<template>
  <div class="signature-pad flex flex-col justify-start w-full">
    <div class="flex flex-row justify-between items-center w-full">
      <p class="signature-pad__text">{{ $t('Summary.signMessage') }}</p>
      <tpc-button has-trailing-icon label="Save" size="large" trailing-icon="trash" type="ghost" @click="onClear">
        {{ $t('Shared.clear') }}
      </tpc-button>
    </div>
    <SignaturePad
      ref="signatureRef"
      :signature="signature"
      :width="'100%'"
      :height="'200px'"
      @signature="onSignature"
    />
    <div class="signature-pad__divider">
      <CustomIcon name="sign-mark" width="20px" height="20px" color="none" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.signature-pad {
  border: 1px solid $color-border-default;
  border-radius: 10px !important;
  padding: 16px 24px 24px 24px;

  &__text {
    @include typography-body-m;
    color: $color-foreground-weak;
  }

  &--mark {
    font-size: 20px;
    color: #71787d;
    text-align: center;
  }

  &__divider {
    width: 100%;
    border-bottom: 1px solid $color-border-outlined;
    padding-bottom: 16px;
  }
}

:deep(.tpc-button-ghost-on-default.large) {
  padding: 0;
}
</style>
