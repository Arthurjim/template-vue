export const config = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_USER_POOL_WEB_CLIENT_ID,
      identityPoolId: import.meta.env.VITE_IDENTITY_POOL_ID,
      allowGuestAccess: false
    }
  },
  API: {
    REST: {
      api: {
        endpoint: import.meta.env.VITE_GASTRONOMY_API ?? ''
      },
      auth: {
        endpoint: import.meta.env.VITE_AUTH_API ?? ''
      }
    }
  }
}

export const pubSubConfig = {
  host: import.meta.env.VITE_HOST_POOL,
  region: 'us-east-1'
}
