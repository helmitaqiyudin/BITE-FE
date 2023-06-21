import Link from "next/link"
import * as Unicons from '@iconscout/react-unicons'

function Navbar({pageTitle}) {
    return (
        <nav className="bg-black h-[70px] align-middle p-[10px] text-white">
            <div className='flex justify-between mr-5 items-center'>
                <div className="flex items-center">
                    <a href="/">
                        <img src="/assets/logo/logo.png" alt="" className="h-[50px]" />
                    </a>
                </div>
                <div className='text-2xl font-bold text-red-600'>
                    {pageTitle}
                </div>
                <div className='space-x-7 flex'>
                    <Link href='/cart' >
                        <Unicons.UilShoppingCart className="text-2xl" />
                    </Link>
                    <Link href= '/orderstatus'>
                        <Unicons.UilFileAlt className="text-2xl" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar