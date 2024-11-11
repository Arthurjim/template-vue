import { ref, type Ref } from 'vue'

export interface UseGuestValidation {
  hotel: Ref<string>
  reservation: Ref<number>
  stateHotel: Ref<{ state: string; errorMessage: string }>
  stateReservation: Ref<{ state: string; errorMessage: string }>
  ensureFormIsValid: () => boolean
}

export function useGuestValidation(): UseGuestValidation {
  const hotel = ref('')
  const reservation = ref()
  const stateHotel = ref({
    state: 'enabled',
    errorMessage: 'Validations.required'
  })
  const stateReservation = ref({
    state: 'enabled',
    errorMessage: 'Validations.required'
  })

  const ensureFormIsValid = (): boolean => {
    let valid = true
    if (hotel.value === '') {
      stateHotel.value = {
        state: 'error',
        errorMessage: 'Validations.required'
      }
      valid = false
    }
    if (!reservation.value) {
      stateReservation.value = {
        state: 'error',
        errorMessage: 'Validations.required'
      }
      valid = false
    }
    if (valid) restartStates()
    return valid
  }

  const restartStates = () => {
    stateHotel.value = {
      state: 'enabled',
      errorMessage: 'Validations.required'
    }
    stateReservation.value = {
      state: 'enabled',
      errorMessage: 'Validations.required'
    }
  }

  return {
    hotel,
    reservation,
    stateHotel,
    stateReservation,
    ensureFormIsValid
  }
}
