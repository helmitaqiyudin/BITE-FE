import Link from 'next/link';
import * as Unicons from '@iconscout/react-unicons';
import { Button } from '@mantine/core';

function Navbar({ pageTitle, cartItems, setCartItems, onCartOpen }) {
    return (
        <nav className="bg-black h-[70px] align-middle p-[10px] text-white">
            <div className="flex justify-between mr-5 items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/assets/logo/logo.png" alt="" className="h-[50px]" />
                    </Link>
                </div>
                <div className="text-2xl font-bold text-red-600">{pageTitle}</div>
                <div className="space-x-7 flex">
                    <Button onClick={onCartOpen} color='red'> 
                        <Unicons.UilShoppingCart className="text-2xl" />
                    </Button>
                    <Button color='red'>
                        <Link href="/orderstatus">
                            <Unicons.UilFileAlt className="text-2xl" />
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
