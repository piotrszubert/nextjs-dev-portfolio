import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Uses() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
      <Button variant={'outline'}>
        uses
      </Button>
      </main>
    </Layout>
  )
}