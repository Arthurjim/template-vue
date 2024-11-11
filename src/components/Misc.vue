<script lang="ts" setup>
const emits = defineEmits(['click'])

const props = defineProps({
  name: String,
  price: {
    type: Number,
    default: 0
  },
  imageUrl: String,
  codeOpera: String,
  notes: String,
  icon: {
    type: String,
    default: 'plus',
    validator(value: string) {
      return ['plus', 'pencil'].includes(value)
    }
  }
})

const onClick = (event: Event) => {
  event.preventDefault()
  emits('click')
}
</script>

<template>
  <div class="flex gap-4 w-full misc">
    <img class="max-w-[104px] w-full max-h-[104px]" :src="props.imageUrl" :alt="props.name" />
    <div class="flex flex-col gap-4 grow">
      <div class="flex flex-col gap-1">
        <div class="flex flex-row">
          <h3 class="misc__title basis-3/4">{{ props.name }}</h3>
          <h3 v-if="props.price > 0" class="misc__title basis-1/4 text-right">${{ props.price }} USD</h3>
        </div>
        <p v-if="props.notes" class="misc__notes max-w-[227px] md:max-w-[257px]">{{ notes }}</p>
      </div>
      <div class="flex flex-row grow gap-1">
        <div class="flex flex-col basis-1/2 gap-1 justify-end">
          <p class="misc__code">{{ $t('Miscellaneous.codeOpera') }}</p>
          <p class="misc__code-value">{{ props.codeOpera }}</p>
        </div>
        <div class="basis-1/2 text-right content-end">
          <tpc-icon-button :icon="props.icon" size="small" type="secondary" @click="onClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.misc {
  @include card-container-m();
  padding: 16px;

  &__title {
    @include typography-body-m();
    font-weight: 500;
    color: $color-foreground-default;
  }

  &__notes {
    @include typography-body-s();
    color: $color-foreground-weak;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__code {
    @include typography-body-xs();
    color: $color-foreground-weak;
  }

  &__code-value {
    @include typography-body-s();
    color: $color-foreground-default;
    font-weight: 500;
  }
}
</style>
