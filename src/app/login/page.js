import Image from 'next/image'
import LoginForm from '@/components/LoginForm'
import Link from 'next/link'

export default function Login() {

    return (
        <main className="min-h-screen" style={{ backgroundImage: "url('assets/background/reglog.png')" }}>

            <div className="flex justify-between items-center p-5">
                <Image src="/assets/logo/logo.png" width={150} height={150} />
            </div>

            <div className='h-full flex justify-center mt-[200px] space-x-[800px]'>
                <div className="text-left">
                    <h1 className="font-bold text-5xl">Trust Us!</h1>
                    <h2 className="font-normal tracking-wide text-2xl mt-5">
                        We Deliver the Best Choice <p>for Fast Food!</p>
                    </h2>
                </div>
                <div>
                    <LoginForm />
                    {/* Dont have an account button */}
                    <div className="flex justify-center mt-5">
                        <p className="text-sm">Don't have an account?</p>
                        <Link href="/register">
                            <button className="text-sm text-red-500 ml-1">Register</button>
                        </Link>
                    </div>
                </div>
            </div>

        </main>
    )
}

