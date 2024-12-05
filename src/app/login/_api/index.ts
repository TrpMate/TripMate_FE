import { createClientApi } from '@/shared/api/client-api'

export interface LoginPayload {
  email: string
  password: string
}

export async function login(data: LoginPayload) {
  const api = createClientApi()
  const response = await api.post('auth/login', data)
  return response.data
}
