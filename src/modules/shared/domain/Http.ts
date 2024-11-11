import type { RequestOptions } from './RequestOptions'

export interface Http {
  get: <T>(path: string, config?: RequestOptions) => Promise<T>
  post: <T>(path: string, config?: RequestOptions) => Promise<T>
  put: <T>(path: string, config?: RequestOptions) => Promise<T>
  patch: <T>(path: string, config?: RequestOptions) => Promise<T>
  delete: (path: string, config?: RequestOptions) => Promise<number>
}
