<script lang="ts" setup>
const emits = defineEmits(['click'])

const props = defineProps({
  label: {
    type: String,
    required: true
  }
})

const onClick = () => {
  emits('click')
}
</script>

<template>
  <footer
    class="footer fixed bottom-0 left-0 right-0 h-[82px] md:h-[112px] w-full flex items-center justify-center px-2"
  >
    <div class="max-w-[416px] w-full">
      <tpc-button block size="large" has-trailing-icon trailing-icon="arrow-right" @click="onClick">
        {{ $t(props.label) }}
      </tpc-button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;

.footer {
  border-top: 1px solid $color-border-default;
}
</style>
