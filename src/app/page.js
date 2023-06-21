import Image from 'next/image'
import Link from 'next/link'

export default function Landing() {
  return (
    <main className="min-h-screen space-y-10" style=
      {
        {
          backgroundImage: `url('assets/background/landing.png')`,
        }
      }
    >

      <div className="flex justify-between items-center p-5">
        <Image src="/assets/logo/logo.png" width={150} height={150} />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl text-black font-medium">Welcome to <span className='text-red-500'>BITE</span></h1>
        <h2 className="text-2xl text-black font-light">"Deliciously Delivered, Just a Click Away!"</h2>
        <Link href="/home">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-10">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  )
}
