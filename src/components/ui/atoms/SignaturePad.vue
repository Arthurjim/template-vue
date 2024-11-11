<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { VueSignaturePad } from '@selemondev/vue3-signature-pad'
import type { CanvasSignatureRef } from '@selemondev/vue3-signature-pad'

import { Logger } from '@utils/log/Logger'

export interface SignaturePadProps {
  width: string
  height: string
  signature?: string
  className?: string
}
const props = withDefaults(defineProps<SignaturePadProps>(), {
  width: '100%',
  height: '250px',
  className: ''
})

const emits = defineEmits(['signature'])

const configOptions = {
  penColor: 'rgb(0,0,0)',
  backgroundColor: 'rgb(0,0,255)',
  maxWidth: 2,
  minWidth: 2
}
const signature = ref<CanvasSignatureRef>()

const saveSignature = () => signature.value?.saveSignature && signature.value.saveSignature()

const handleSignatureFinished = () => {
  Logger.debug('Signature finished')
  const signature = saveSignature()
  emits('signature', signature)
}

onMounted(() => {
  if (props.signature) {
    signature.value?.fromDataURL && signature.value.fromDataURL(props.signature)
  }
})

defineExpose({
  clearCanvas: () => {
    signature.value?.clearCanvas && signature.value.clearCanvas()
  },
  saveSignature,
  isCanvasEmpty: () => !signature.value?.isCanvasEmpty || signature.value.isCanvasEmpty(),
  signatureRef: signature
})
</script>

<template>
  <VueSignaturePad
    ref="signature"
    :class="className"
    :width="props.width"
    :height="props.height"
    :max-width="configOptions.maxWidth"
    :min-width="configOptions.minWidth"
    :options="configOptions"
    @end-stroke="handleSignatureFinished"
  />
</template>

<style lang="scss" scoped></style>
