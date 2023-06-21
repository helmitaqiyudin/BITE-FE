import React from 'react'
import * as Unicons from '@iconscout/react-unicons'

function Footer() {
    return (
        <div className="bg-black h-[350px] text-white p-[70px]">
            <div className="">
                <div className="flex flex-wrap justify-around">
                    <div className="flex flex-col mt-5">
                        <h1 className="text-white text-5xl font-bold">
                            <span className="text-red-500">BITE </span>
                        </h1>
                        <div className="flex mt-5">
                            <a href="">
                                <div className="bg-red-500 rounded-md h-[50px] w-[50px] flex items-center justify-center mr-5 hover:text-red-500 hover:bg-white">
                                    <Unicons.UilFacebookF className="text-black text-2xl" />
                                </div>
                            </a>
                            <a href="">
                                <div className="bg-red-500 rounded-md h-[50px] w-[50px] flex items-center justify-center mr-5 hover:text-red-500 hover:bg-white">
                                    <Unicons.UilInstagramAlt className="text-black text-2xl" />
                                </div>
                            </a>
                            <a href="">
                                <div>
                                    <div className="bg-red-500 rounded-md h-[50px] w-[50px] flex items-center justify-center mr-5 hover:text-red-500 hover:bg-white">
                                        <Unicons.UilTwitterAlt className="text-black text-2xl" />
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="bg-red-500 rounded-md h-[50px] w-[50px] flex items-center justify-center mr-5 hover:text-red-500 hover:bg-white">
                                    <Unicons.UilLinkedinAlt className="text-black text-2xl" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold">Company</h4>
                        <ul>
                            <li className="flex flex-col text-gray-400 gap-5 mt-5">
                                <a href="" className="hover:text-white">
                                    About
                                </a>
                                <a href="" className="hover:text-white">
                                    Contact Us
                                </a>
                                <a href="" className="hover:text-white">
                                    Support
                                </a>
                                <a href="" className="hover:text-white">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Quick Link</h4>
                        <ul>
                            <li className="flex flex-col text-gray-400 gap-5 mt-5">
                                <a href="" className="hover:text-white">
                                    Share Location
                                </a>
                                <a href="" className="hover:text-white">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Legal</h4>
                        <ul>
                            <li className="flex flex-col text-gray-400 gap-5 mt-5">
                                <a href="" className="hover:text-white">
                                    Terms &amp; Conditions
                                </a>
                                <a href="" className="hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer