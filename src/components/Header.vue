<script lang="ts" setup>
import { useRouter } from 'vue-router'

import CustomIcon from '@components/ui/atoms/CustomIcon.vue'
import LanguageSelector from '@components/ui/atoms/LanguageSelector.vue'

import { useAuth } from '@composables/Auth'

const router = useRouter()
const { logout, isLoggedIn } = useAuth()

const handleLogout = async (event: Event) => {
  event.preventDefault()
  await logout()
  await router.push({ name: 'Login' })
}
</script>

<template>
  <header class="header fixed top-0 left-0 right-0 h-20 max-w-[100vw]">
    <nav class="group flex h-full w-full items-center justify-start py-5 px-10">
      <LanguageSelector />
      <CustomIcon class="mx-auto" name="palace-resorts" height="44px" width="109px" color="none" />
      <tpc-button
        v-if="isLoggedIn"
        size="medium"
        type="secondary"
        leading-icon="user"
        has-leading-icon
        @click="handleLogout"
      >
        {{ $t('Shared.logout') }}
      </tpc-button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/variables' as *;

.header {
  border-bottom: 1px solid $color-border-default;
}
</style>
