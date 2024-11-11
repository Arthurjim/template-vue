<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['select'])

import Misc from './Misc.vue'

import { useService } from '@composables/Service'

import { useServiceStore } from '@stores/Service'

const { getters } = useService()
const { services, service } = storeToRefs(useServiceStore())

const loading = ref(false)
const serviceSearch = ref('')

const listServices = computed(() => {
  if (serviceSearch.value === '') return services.value
  return services.value.filter((service) => {
    return (
      service.name.toLowerCase().includes(serviceSearch.value.toLowerCase()) ||
      service.codeOpera.includes(serviceSearch.value)
    )
  })
})

const onClickMisc = (i: number) => {
  service.value = listServices.value[i]
  emit('select')
}

onMounted(async () => {
  loading.value = true
  try {
    await getters()
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <tpc-search-field
    v-model="serviceSearch"
    class="max-w-[416px] w-full"
    :has-trailing-loading="loading"
    has-action-trailing-icon
  />
  <div class="misc__list flex flex-col gap-4 max-w-[416px] w-full">
    <Misc
      v-for="(item, i) in listServices"
      :key="`${i}-${item.codeOpera}`"
      :name="item.name"
      :code-opera="item.codeOpera"
      :image-url="item.image"
      @click="onClickMisc(i)"
    />
  </div>
</template>

<style lang="scss" scoped>
.misc {
  &__list {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
