import axios from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const createClientApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  })

  api.interceptors.request.use(
    (config) => {
      config.withCredentials = true
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      // if (error.response?.status === 401) {
      //   try {
      //     await axios.post('/_api/auth/refresh')
      //     return _api.request(error.config)
      //   } catch {
      //     window.location.href = '/login'
      //   }
      // }
      return Promise.reject(error)
    }
  )

  return api
}
