<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import CustomIcon from '@components/ui/atoms/CustomIcon.vue'

import { useServiceStore } from '@stores/Service'

const router = useRouter()

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const { service, misc } = storeToRefs(useServiceStore())

const showModal = ref(props.modelValue)

const onCancel = () => {
  showModal.value = false
}

const onReturn = async () => {
  service.value = {
    codeOpera: '',
    name: '',
    description: '',
    image: ''
  }
  misc.value = {
    codeOpera: '',
    name: '',
    description: '',
    image: '',
    notes: '',
    amount: 0
  }
  sessionStorage.removeItem('misc')
  showModal.value = false
  await router.push({ name: 'GuestList' })
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
    :label-action-primary="$t('Shared.return')"
    :label-action-secondary="$t('Shared.cancel')"
    @action-primary="onReturn"
    @action-secondary="onCancel"
  >
    <template #content>
      <div class="w-full flex flex-col gap-6 items-center justify-center">
        <CustomIcon name="warning" height="80px" width="80px" color="none" />
        <h2 class="message-alert text-center">{{ $t('Miscellaneous.returnGuest') }}</h2>
      </div>
    </template>
  </tpc-modal>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.message-alert {
  @include typography-inner();
  font-weight: 500;
  color: $color-foreground-default;
}

:deep(.tpc-modal-content) {
  padding: 0;
}

:deep(.tpc-modal-small) {
  width: 416px;
  max-width: 416px;
}

:deep(.tpc-modal-footer) {
  justify-content: space-between;
}

:deep(.tpc-button-footer) {
  width: 100%;
}
</style>
