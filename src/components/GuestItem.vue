<script lang="ts" setup>
const emit = defineEmits(['click'])

const props = defineProps({
  room: Number,
  lastName: String
})

const onClick = () => {
  emit('click')
}
</script>

<template>
  <tpc-button block type="secondary" size="large" @click="onClick">
    <div class="flex flex-row justify-between">
      <span>{{ props.room }}</span>
      <span>{{ props.lastName }}</span>
    </div>
  </tpc-button>
</template>

<style lang="scss" scoped>
:deep(.tpc-cursor-pointer) {
  width: 100% !important;
}
</style>
