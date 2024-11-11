import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { decryptToken } from '@utils/encrypted/Token'
import { useSummaryStore } from '@stores/Summary'

export function useSummary(): void {
  const { data } = storeToRefs(useSummaryStore())
  const route = useRoute()

  const token = route.query.token as string
  if (token) {
    const decryptedData = decryptToken(token)
    data.value = decryptedData
    sessionStorage.setItem('data', JSON.stringify(decryptedData))
  }
}
