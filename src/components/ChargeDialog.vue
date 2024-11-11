<script lang="ts" setup>
import { computed, type Ref } from 'vue'
import CustomIcon from './ui/atoms/CustomIcon.vue'

const showModal: Ref<boolean> = computed({
  get: () => showModal.value,
  set: (value) => {
    emits('update:modelValue', value)
  }
})
const emits = defineEmits(['update:modelValue'])

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <tpc-modal size="small">
    <template #content>
      <div class="size-full flex flex-col justify-center items-center">
        <CustomIcon class="mb-6" name="check-circle" width="80px" height="80px" color="white" stroke="1" />
        <div class="message w-1/2 text-center">
          {{ $t('TermsAndConditions.successMessage') }}
        </div>
      </div>
    </template>
    <template #actions>
      <tpc-button size="large" type="primary" block @click="closeModal">
        {{ $t('Shared.close') }}
      </tpc-button>
    </template>
  </tpc-modal>
</template>

<style lang="scss" scoped>
@use '@assets/styles/tools/mixins' as *;

.message {
  @include typography-title-xs();
  font-weight: 400;
}
</style>
