import { ref, watch, type Ref } from 'vue'

import { EmailValidations } from '@modules/shared/domain/utils/EmailValidations'

export interface UseLoginValidation {
  username: Ref<string>
  password: Ref<string>
  stateUsername: Ref<{ state: string; errorMessage: string }>
  statePassword: Ref<{ state: string; errorMessage: string }>
  ensureFormIsValid: () => boolean
}

export function useLoginValidation(): UseLoginValidation {
  const username = ref('')
  const password = ref('')
  const stateUsername = ref({
    state: 'enabled',
    errorMessage: 'Validations.required'
  })
  const statePassword = ref({
    state: 'enabled',
    errorMessage: 'Validations.required'
  })

  const ensureFormIsValid = (): boolean => {
    let valid = true
    if (username.value === '') {
      stateUsername.value = {
        state: 'error',
        errorMessage: 'Validations.required'
      }
      valid = false
    }
    if (password.value === '') {
      statePassword.value = {
        state: 'error',
        errorMessage: 'Validations.required'
      }
      valid = false
    }
    if (!ensureEmailIsValid()) {
      valid = false
    }
    if (valid) restartStates()
    return valid
  }

  const ensureEmailIsValid = (): boolean => {
    if (!EmailValidations.isValid(username.value)) {
      stateUsername.value = {
        state: 'error',
        errorMessage: 'Validations.email'
      }
      return false
    }
    stateUsername.value = {
      state: 'enable',
      errorMessage: 'Validations.required'
    }
    return true
  }

  const restartStates = () => {
    stateUsername.value = {
      state: 'enabled',
      errorMessage: 'Validations.required'
    }
    statePassword.value = {
      state: 'enabled',
      errorMessage: 'Validations.required'
    }
  }

  watch(username, () => {
    if (username.value !== '' && username.value.includes('@')) {
      ensureEmailIsValid()
    }
  })

  return {
    username,
    password,
    stateUsername,
    statePassword,
    ensureFormIsValid
  }
}
