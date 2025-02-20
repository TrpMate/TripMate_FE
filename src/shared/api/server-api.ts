import axios from 'axios'
import { headers } from 'next/headers'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const createServerApi = async () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })

  try {
    const headersList = headers()
    const cookieHeader = (await headersList).get('cookie')
    const token = cookieHeader?.split('token=')?.[1]?.split(';')?.[0]

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  } catch (error) {
    console.error('Error getting headers:', error)
  }

  return api
}
