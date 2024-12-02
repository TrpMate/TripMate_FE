import { createClientApi } from '@/shared/api/client-api'

export interface LoginRequest {
  email: string
  password: string
  userName: string
}

export interface LoginResponse {
  token: string
}

export async function login(data: LoginRequest) {
  const api = await createClientApi()
  const response = await api.post<LoginResponse>('auth/login', data)
  return response.data
}
