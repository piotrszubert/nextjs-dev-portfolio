import { Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="w-full border-b bg-background mb-3 py-4">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg">
          Logo
        </span>
        <div className="flex">
          <Button variant="ghost">
            <Github />
          </Button>
          <Button variant="ghost">
            <Twitter />
          </Button>
        </div>
      </div>
    </header>
  )
}