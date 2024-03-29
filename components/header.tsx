"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavMenu } from "./navMenu"
import { ThemeToggle } from "./themeToggle"
import { useState } from "react"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <div>
          <ThemeToggle />
        </div>
        <div className="hidden md:block">
          <NavMenu />
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 flex flex-col items-center">
          <NavMenu flexDirection="flex-col" gap="gap-3" />
        </div>
      )}
    </header>
  )
}
