export interface RequestOptions {
  headers: Record<string, string>
  params?: Record<string, string>
  apiName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
}
