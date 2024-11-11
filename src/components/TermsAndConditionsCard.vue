<script lang="ts" setup></script>

<template>
  <div class="terms p-6">
    <div class="terms__title mb-4">
      {{ $t('TermsAndConditions.title') }}
    </div>
    <div class="terms__body">
      <p v-for="(paragraph, index) in $t('TermsAndConditions.body').split('\n')" :key="index" class="pb-6">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.terms {
  @include card-container-strong();

  &__title {
    @include typography-title-l();
    text-align: justify;
  }

  &__body {
    @include typography-body-m();
    text-align: left;
  }
}
</style>
