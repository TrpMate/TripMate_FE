import { createClientApi } from '@/shared/api/client-api'

export interface LoginRequest {
  email: string
  password: string
}

export async function login(data: LoginRequest) {
  const api = createClientApi()
  const response = await api.post('auth/login', data)
  return response.data
}
