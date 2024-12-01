import type { NextApiRequest, NextApiResponse } from 'next'
import { useUserStore } from '@/lib/userStore'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password, name, contact } = req.body

    if (!email || !password || !name || !contact) {
      return res.status(400).json({ message: '모든 필드를 입력해 주세요.' })
    }

    const users = useUserStore.getState().users
    const existingUser = users.find((user) => user.email === email)

    if (existingUser) {
      return res.status(400).json({ message: '이미 사용 중인 이메일입니다.' })
    }

    useUserStore.getState().addUser({ email, password, name, contact })

    return res.status(201).json({ message: '회원가입 성공' })
  }
  return res.status(405).json({ message: '지원하지 않는 메서드입니다.' })
}
