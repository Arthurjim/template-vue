<script lang="ts" setup>
import { ref, computed } from 'vue'

import CustomIcon from '../atoms/CustomIcon.vue'

const props = defineProps({
  open: Boolean
})

const open = ref(props.open)

const textShow = computed(() => (open.value ? 'Miscellaneous.showLess' : 'Miscellaneous.showMore'))
const icon = computed(() => (open.value ? 'chevron-up' : 'chevron-down'))

const toggle = () => {
  open.value = !open.value
}

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
}

const enter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight + 16}px`
}

const beforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight + 16}px`
}

const leave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
}
</script>

<template>
  <div class="accordion w-full flex flex-col gap-0">
    <button class="flex justify-between items-center p-4" @click="toggle">
      <slot name="header" />
      <div class="flex gap-3">
        <p class="accordion__text-show">{{ $t(textShow) }}</p>
        <CustomIcon :key="icon" :name="icon" width="20px" height="20px" stroke="1" color="none" />
      </div>
    </button>
    <transition name="accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <div v-if="open" class="accordion__content overflow-hidden flex p-4">
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.accordion {
  @include card-container-m();

  &__text-show {
    @include typography-body-s();
    color: $color-foreground-default;
  }

  &__content {
    border-top: 1px solid $color-border-default;
    transition: 150ms ease-out;
  }
}
</style>
