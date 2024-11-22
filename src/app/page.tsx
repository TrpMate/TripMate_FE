import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="bg-blue-500 p-4 text-white">
      <h1 className="text-lg font-bold">Shadcn UI 테스트</h1>

      <Button variant="default" className="mt-4">
        기본 버튼
      </Button>

      <div>ddd</div>

      <Button variant="secondary" className="ml-4 mt-4">
        보조 버튼
      </Button>
    </div>
  )
}
