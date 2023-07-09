import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Layout>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <PageHero
              heading='Welcome to my personal portfolio!'
              subheading=''
            />
            <div className='space-y-7'>
              <p>
                I'm [Your Name], a dedicated and passionate software developer with a strong desire to create innovative solutions that positively impact people's lives. From the first time I wrote a line of code, I knew I had found my calling. The world of software development is dynamic, constantly evolving, and I find great joy in keeping up with the latest technologies and trends.
              </p>
              <p>
                With a solid educational foundation in computer science and [relevant degrees/certifications], I have acquired a deep understanding of software development principles, algorithms, and data structures. I am proficient in [programming languages, frameworks, and tools you specialize in]. My technical expertise extends to [additional skills or technologies you have mastered].
              </p>
              <p>
                Throughout my career, I have had the privilege of working on a variety of projects that have challenged me and allowed me to grow both professionally and personally. Whether it's building scalable web applications, developing mobile apps, or creating robust backend systems, I embrace every opportunity to tackle complex problems and deliver elegant solutions.
              </p>
            </div>
          </div>
          <div className='py-6 rotate-3'>
            <img
              className='rounded-xl mx-auto'
              width="350"
              height="350"
              src='https://via.placeholder.com/350' />
          </div>
        </div>
      </main>
    </Layout>
  )
}
