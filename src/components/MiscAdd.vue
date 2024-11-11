<script lang="ts" setup>
import { useRouter } from 'vue-router'

import CustomIcon from '@components/ui/atoms/CustomIcon.vue'

const router = useRouter()

const onAdd = async () => {
  await router.push({ name: 'Miscellaneous' })
}
</script>

<template>
  <div class="miscellaneous-add flex flex-col items-center w-full gap-6">
    <CustomIcon name="info" width="48px" height="48px" color="none" />
    <h3 class="miscellaneous-add__text">{{ $t('Miscellaneous.emptyList') }}</h3>
    <tpc-button block has-leading-icon leading-icon="plus" @click="onAdd">
      {{ $t('Miscellaneous.create') }}
    </tpc-button>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.miscellaneous-add {
  @include card-container-m();
  padding: 32px 16px 16px 16px;

  &__text {
    @include typography-body-s();
    color: $color-foreground-weak;
  }
}
</style>
