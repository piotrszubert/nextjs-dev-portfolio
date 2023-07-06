import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className} max-w-4xl mx-auto`}
    >
    <Header/>
    <Button variant={'outline'}>
      button
    </Button>
    </main>
  )
}
