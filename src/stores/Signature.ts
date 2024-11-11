import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSignatureStore = defineStore('signature', () => {
  const signature: Ref<string | undefined> = ref(undefined)
  const hasSignature = computed(() => signature.value !== undefined && signature.value !== '')
  const termsAndConditions = ref(false)

  return {
    signature,
    hasSignature,
    termsAndConditions
  }
})
