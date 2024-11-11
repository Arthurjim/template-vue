/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_BASE_API?: string
  readonly VITE_ENVIRONMENT?: string
  readonly VITE_IDENTITY_POOL_ID?: string
  readonly VITE_USER_POOL_WEB_CLIENT_ID?: string
  readonly VITE_USER_POOL_ID?: string
  readonly VITE_HOST_POOL?: string
  readonly VITE_AUTH_API?: string
  readonly VITE_SECRET_KEY?: string
  readonly VITE_GASTRONOMY_API?: string
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module '*.jpg' {
  const value: unknown
  export = value
}

declare module '*.png' {
  const value: unknown
  export = value
}

declare module '*.svg' {
  const value: unknown
  export = value
}

declare module '*.svg?component' {
  import type { FunctionalComponent } from 'vue'
  const component: FunctionalComponent
  export default component
}
