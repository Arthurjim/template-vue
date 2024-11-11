<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { generateToken } from '@utils/encrypted/Token'

import Misc from '@components/Misc.vue'
import MiscAdd from '@components/MiscAdd.vue'
import MiscDialog from '@components/MiscDialog.vue'
import GuestInformation from '@components/GuestInformation.vue'
import FooterAction from '@components/FooterAction.vue'
import BackButton from '@components/ui/atoms/BackButton.vue'
import AlertReturnGuest from '@components/AlertReturnGuest.vue'

import { useServiceStore } from '@stores/Service'
import { useGuestStore } from '@stores/Guest'

const router = useRouter()

const { misc, service } = storeToRefs(useServiceStore())
const { guest } = storeToRefs(useGuestStore())

const showModalEdit = ref(false)
const showModalBack = ref(false)

const isMiscEmpty = computed(() => misc.value.codeOpera === '')

const onEdit = () => {
  service.value = {
    ...misc.value
  }
  showModalEdit.value = true
}

const onBack = async () => {
  if (!isMiscEmpty.value) {
    showModalBack.value = true
    return
  }
  await router.push({ name: 'GuestList' })
}

const onShowGuest = async () => {
  const token = generateToken({
    name: guest.value.name,
    lastName: guest.value.lastName,
    folio: `${guest.value.folio}`,
    hotel: guest.value.hotel,
    room: `${guest.value.room}`,
    service: misc.value.name,
    amount: `${misc.value.amount}`,
    notes: misc.value.notes,
    codeOpera: misc.value.codeOpera,
    description: misc.value.description
  })
  const url = `/summary?token=${encodeURIComponent(token)}`
  window.open(url, '_blank')
}
</script>

<template>
  <BackButton @click="onBack" />
  <section class="flex flex-grow flex-col gap-6 px-4 items-center justify-center">
    <h1 class="assign-misc__title">{{ $t('Miscellaneous.title') }}</h1>
    <div class="flex flex-col gap-4 max-w-[416px] w-full">
      <GuestInformation />
      <MiscAdd v-if="isMiscEmpty" />
      <Misc
        v-else
        :code-opera="misc.codeOpera"
        :price="misc.amount"
        :image-url="misc.image"
        :name="misc.name"
        :notes="misc.notes"
        icon="pencil"
        @click="onEdit"
      />
    </div>
  </section>
  <FooterAction v-if="!isMiscEmpty" label="Miscellaneous.showGuest" @click="onShowGuest" />
  <MiscDialog v-model="showModalEdit" />
  <AlertReturnGuest v-model="showModalBack" />
</template>

<style lang="scss" scoped>
@use '@assets/styles/settings/colors' as *;
@use '@assets/styles/tools/mixins' as *;

.assign-misc {
  &__title {
    @include typography-title-l();
    font-weight: 400;
    color: $color-foreground-default;
  }
}
</style>
