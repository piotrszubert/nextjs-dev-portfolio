import { Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button'
import NavMenu from './navMenu';

export default function Header() {
  return (
    <header className="w-full sticky top-0 border-b bg-background mb-3 py-4">
      <div className="flex justify-between items-center">
        <div className='flex-1'>
          <span className="font-semibold text-lg">
            {/* Logo */}
          </span>
        </div>
        <div className='flex-1 justify-center'>
          <NavMenu/>
        </div>
        <div className="flex flex-1 justify-end">
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