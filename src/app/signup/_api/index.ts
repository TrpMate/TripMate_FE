import { createClientApi } from '@/shared/api/client-api'

interface SignupPayload {
  email: string
  password: string
  username: string
  nickname: string
}

export async function signup(data: SignupPayload) {
  const api = createClientApi()
  const response = await api.post('user/signup', data)
  return response.data
}
