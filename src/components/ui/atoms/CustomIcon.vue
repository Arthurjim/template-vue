<script setup lang="ts">
import { collection } from '@assets/icons/Collection'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '48px'
  },
  height: {
    type: String,
    default: '48px'
  },
  color: {
    type: String,
    default: 'currentColor'
  },
  stroke: {
    type: String,
    default: 'none'
  }
})

const IconComponent = collection[props.name]
</script>

<template>
  <IconComponent :width="props.width" :height="props.height" :fill="props.color" :stroke="props.stroke" />
</template>
