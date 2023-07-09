import { Github, Twitter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button'
import NavMenu from './navMenu';
import { ThemeToggle } from './themeToggle';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full sticky top-0 border-b bg-background mb-3 py-4 z-10">
      <div className="flex justify-between items-center">
        <div className='flex-1'>
          <span className="font-semibold text-lg">
            <ThemeToggle/>
          </span>
        </div>
        <div className='flex-grow hidden md:block'>
          <NavMenu/>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <Button variant="ghost" size="icon">
            <Github />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter />
          </Button>
        </div>
        <div className='md:hidden'>
          <Button variant="ghost" size="icon" className='md:hidden' onClick={toggleMenu}>
            {isOpen ? <X/> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 flex flex-col items-center">
          <NavMenu flexDirection='flex-col' gap='gap-3' />
          <div className="mt-2">
            <Button variant="ghost" size="icon">
              <Github />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}