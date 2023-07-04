import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} max-w-4xl py-10 mx-auto`}
    >
    <Button variant={'outline'}>
      button
    </Button>
    </main>
  )
}
