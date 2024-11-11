<script lang="ts" setup>
import { ref, watch } from 'vue'

import MiscForm from './MiscForm.vue'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const showModal = ref(props.modelValue)

const refMiscForm = ref<InstanceType<typeof MiscForm> | null>(null)

const onSaveChanges = async () => {
  const isValidForm = await refMiscForm.value?.onSubmit()
  if (!isValidForm) return
  showModal.value = false
}

const onCancel = () => {
  showModal.value = false
}

watch(
  () => props.modelValue,
  (newValue) => {
    showModal.value = newValue
  }
)

watch(
  () => showModal.value,
  (newValue) => {
    emit('update:modelValue', newValue)
  }
)
</script>

<template>
  <tpc-modal
    v-model="showModal"
    persistent
    has-actions
    size="small"
    :label-action-primary="$t('Miscellaneous.saveChanges')"
    :label-action-secondary="$t('Miscellaneous.cancel')"
    @action-primary="onSaveChanges"
    @action-secondary="onCancel"
  >
    <template v-if="showModal" #content>
      <MiscForm ref="refMiscForm" />
    </template>
  </tpc-modal>
</template>

<style lang="scss" scoped>
:deep(.tpc-modal-content) {
  padding: 0;
}
</style>
