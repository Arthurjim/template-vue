import CryptoJS from 'crypto-js'

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY ?? 'secret_key'

export const generateToken = (payload: Record<string, string>) => {
  return CryptoJS.AES.encrypt(JSON.stringify(payload), SECRET_KEY).toString()
}

export const decryptToken = (token: string) => {
  const bytes = CryptoJS.AES.decrypt(token, SECRET_KEY)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
}
