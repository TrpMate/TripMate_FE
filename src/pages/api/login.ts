import type { NextApiRequest, NextApiResponse } from 'next'
import { useUserStore } from '@/lib/userStore'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: '이메일과 비밀번호를 모두 입력해 주세요.' })
    }

    const success = useUserStore.getState().login(email, password)

    if (success) {
      return res.status(200).json({ message: '로그인 성공!' })
    }

    return res.status(401).json({ message: '이메일 또는 비밀번호가 올바르지 않습니다.' })
  }

  return res.status(405).json({ message: '지원하지 않는 메서드입니다.' })
}
