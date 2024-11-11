<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useSummaryStore } from '@stores/Summary'

const { data } = storeToRefs(useSummaryStore())
</script>

<template>
  <div class="resume flex flex-col justify-center rounded-[10px] size-full gap-8 p-6">
    <div class="flex flex-col gap-2">
      <h1 class="resume__title">{{ $t('Summary.hi') }} {{ data.name }},</h1>
      <p class="resume__subtitle">{{ $t('Summary.resume') }}</p>
    </div>
    <div class="flex flex-col gap-1">
      <div class="flex flex-row justify-between items-center">
        <p class="resume__name">{{ data.service }}</p>
        <p class="resume__price">${{ data.amount }}</p>
      </div>
      <p class="resume__notes">{{ data.notes }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.resume {
  @include card-container-m();

  &__title {
    @include typography-title-l();
    text-align: left;
  }
  &__subtitle {
    @include typography-title-xs();
  }

  &__name {
    @include typography-title-xs();
  }

  &__price {
    @include typography-title-xs();
  }

  &__notes {
    @include typography-body-s();
    text-align: left;
    color: $color-foreground-weak;
  }
}
</style>
