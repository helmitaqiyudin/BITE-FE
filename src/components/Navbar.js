import Link from "next/link"

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
                <div className='space-x-7'>
                    <Link href='/cart' >
                        <ion-icon name="cart-outline" size="large"></ion-icon>
                    </Link>
                    <Link href= '/orderstatus'>
                        <ion-icon name="receipt-outline" size="large"></ion-icon>
                    </Link>
                </div>
            </div>
            <script src="https://unpkg.com/ionicons@latest/dist/ionicons/ionicons.js"></script>
        </nav>
    )
}

export default Navbar