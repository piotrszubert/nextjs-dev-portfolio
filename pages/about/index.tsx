import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import PageHero from '@/components/pageHero'
import LinkList from '@/components/linksList'
import Image from 'next/image'
import aboutImage from '@/public/about-image.jpg'
const inter = Inter({ subsets: ['latin'] })
import Head from 'next/head'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Portfolio - About</title>
      </Head>
      <main
        className={`${inter.className} max-w-4xl mx-auto`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <PageHero
              heading='Welcome to my personal portfolio!'
              subheading=''
            >
            <div className='space-y-7 text-muted-foreground'>
              <p>
                I&apos;m [Your Name], a dedicated and passionate software developer with a strong desire to create innovative solutions that positively impact people&apos;s lives. From the first time I wrote a line of code, I knew I had found my calling. The world of software development is dynamic, constantly evolving, and I find great joy in keeping up with the latest technologies and trends.
              </p>
              <p>
                With a solid educational foundation in computer science and [relevant degrees/certifications], I have acquired a deep understanding of software development principles, algorithms, and data structures. I am proficient in [programming languages, frameworks, and tools you specialize in]. My technical expertise extends to [additional skills or technologies you have mastered].
              </p>
              <p>
                Throughout my career, I have had the privilege of working on a variety of projects that have challenged me and allowed me to grow both professionally and personally. Whether it&apos;s building scalable web applications, developing mobile apps, or creating robust backend systems, I embrace every opportunity to tackle complex problems and deliver elegant solutions.
              </p>
            </div>
            </PageHero>
          </div>
          <div className='py-16 ms-0 md:ms-10'>
            <div className='flex items-start flex-col md:ps-10'>
              <Image
                alt='about image'
                className='rounded-xl max-w-full'
                src={aboutImage} />
              <div className="mt-6">
                <LinkList nameVisible={true} paddingClass='py-6' flexDirectionClass='flex-col'/>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
