export class Logger {
  static debug(message: string, value: unknown = ''): void {
    if (['development', 'local'].some((env) => import.meta.env.VITE_ENVIRONMENT === env)) {
      const prefix = '\t 🟣 DEBUG -'
      console.log(`${prefix} ${message}`, value)
    }
  }

  static info(message: string, value: unknown = ''): void {
    const prefix = '\t 🔵 INFO -'
    console.info(`${prefix} ${message}`, value)
  }

  static error(message: string, value: unknown = ''): void {
    const prefix = '\t 🔴 ERROR -'
    console.error(`${prefix} ${message}`, value)
  }
}
