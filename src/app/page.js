import { Hero } from "@/components/Hero"

export default function Home() {
  return (
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8 bg-zinc-50">
          <div className="w-full dark:bg-zinc-900">
            <Hero/>
          </div>
        </div>
     </div>
  )
}
