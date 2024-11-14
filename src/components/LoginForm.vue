<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// import { useAuth } from '@composables/Auth'

const router = useRouter()
const username = ref('')
const password = ref('')

const onSubmit = async (event: Event) => {
  event.preventDefault()
  // implement login function
  // await login(username.value, password.value)
  router.push({ name: 'Home' })
}
</script>

<template>
  <form class="flex flex-col gap-6 max-w-[416px] w-full" autocomplete="off" @submit="onSubmit">
    <h2 class="login__title self-center">{{ $t('Shared.login') }}</h2>
    <tpc-text-field v-model="username" :label="$t('Fields.username')" model="Input text" :readonly="false" />
    <tpc-password-field v-model="password" :label="$t('Fields.password')" model="Input text" />
    <tpc-button block size="large" type="submit">{{ $t('Shared.login') }}</tpc-button>
  </form>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;
@use '@assets/styles/tools/mixins' as *;

.login {
  &__title {
    @include typography-title-l();
    color: $color-foreground-default;
  }
}
</style>
