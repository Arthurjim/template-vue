<script lang="ts" setup>
const emit = defineEmits(['click'])

const onClick = (event: Event) => {
  emit('click', event)
}
</script>

<template>
  <tpc-button
    class="absolute top-20 pt-4 pl-0 md:pt-6 lg:pt-6 md:pl-6 lg:pl-6 2xl:pt-9 2xl:pl-11"
    has-leading-icon
    leading-icon="arrow-left"
    size="large"
    type="ghost"
    @click="onClick"
  >
    {{ $t('Shared.back') }}
  </tpc-button>
</template>

<style lang="scss" scoped></style>
