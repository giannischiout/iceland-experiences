
import { Navbar } from '@/components/nav'
import Image from 'next/image'
import { Filters } from '@/app/sections/home/filters'

export async function HomePageView() {

  return (
    <main className="min-h-screen">
      <section className="relative min-h-screen w-full flex flex-col">
        <Navbar />
        <div className="absolute inset-0 bg-white/0 z-1" />
        <Image
          alt="background image"
          fill
          sizes="100vh"
          src="/assets/2.png"
          className="object-cover"
        />
        <div className="flex-1 flex w-full flex-col items-center  gap-10 mt-[6%]  z-200">
          <Content />
          < Filters />
        </div>
      </section>
    </main>
  )
}




export const Content = () => {
  return (
      <div className="text-center max-w-[700px] flex flex-col gap-2">
        <h1 className="text-5xl font-light">Your Local </h1>
        <h1 className="text-6xl font-bold">Card Rental in Iceland</h1>
      </div>
  )
}

 export const Logo = () => {
  return (
      <span className=" cfont-bold text-white text-4xl">Venture<span className="text-orange-500">.</span></span>
  )
}



