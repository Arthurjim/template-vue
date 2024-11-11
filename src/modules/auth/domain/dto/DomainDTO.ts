export interface DomainData {
  data: Domains
  errors: string[]
  warnings: string[]
}

export interface Domains {
  domains: string[]
  dueDate: number
}
