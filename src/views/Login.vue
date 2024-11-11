<script lang="ts" setup>
import LoginForm from '@src/components/LoginForm.vue'
</script>

<template>
  <section class="flex flex-grow flex-col gap-20 px-4 items-center justify-center">
    <LoginForm />
  </section>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.login {
  &__title {
    @include typography-display-s();
    color: $color-foreground-default;
  }

  &__subtitle {
    @include typography-title-l();
    color: $color-foreground-default;
  }
}
</style>
