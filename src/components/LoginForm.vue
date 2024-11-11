<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { Logger } from '@utils/log/Logger'

import { useAuth } from '@composables/Auth'
import { useLoginValidation } from '@composables/LoginValidation'

const router = useRouter()

const { login } = useAuth()
const { username, password, statePassword, stateUsername, ensureFormIsValid } = useLoginValidation()

const loading = ref(false)
const openSnackbar = ref(false)

const onSubmit = async () => {
  if (!ensureFormIsValid()) return

  loading.value = true
  try {
    await login(username.value, password.value)
    await router.push({ name: 'GuestLayout' })
  } catch (error) {
    openSnackbar.value = true
    Logger.debug('Error on login', error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="flex flex-col gap-6 max-w-[416px] w-full" autocomplete="off" @submit.prevent="onSubmit">
    <h2 class="login__title self-center">{{ $t('Shared.login') }}</h2>
    <tpc-text-field
      v-model="username"
      :state="stateUsername.state"
      :error-messages="$t(stateUsername.errorMessage, { field: $t('Fields.username') })"
      :label="$t('Fields.username')"
      model="Input text"
      :readonly="false"
    />
    <tpc-password-field
      v-model="password"
      :state="statePassword.state"
      :error-messages="$t(statePassword.errorMessage, { field: $t('Fields.password') })"
      :label="$t('Fields.password')"
      model="Input text"
      :readonly="false"
    />
    <tpc-button :loading="loading" :disabled="loading" block size="large" type="submit">
      {{ $t('Shared.login') }}
    </tpc-button>
  </form>
  <tpc-snackbar v-model="openSnackbar" type="danger" :persistent="false" :message="$t('Error.userOrPasswordInvalid')" />
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
