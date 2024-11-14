<script setup lang="ts">
import { Logger } from '@src/utils/log/Logger'
import { useRouter } from 'vue-router'
const router = useRouter()

const logOut = () => {
  router.push({ name: 'Login' })
}

const handlerMenu = () => {
  Logger.info('Menu clicked')
}
</script>
<template>
  <main class="relative flex flex-col min-h-screen">
    <tpc-navigation-bar
      context="onBrand"
      label-action-primary="Login"
      @action-primary="logOut"
      @action-menu="handlerMenu"
    />
    <router-view />
  </main>
</template>

<style lang="scss" scoped></style>
