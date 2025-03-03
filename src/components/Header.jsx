import React from 'react'
import Link from 'next/link'
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Header = () =>{
    return(
    <div>
        <nav className="flex items-center justify-between mt-2 mx-10 px-10 py-3">
        <Link href='/'>
            <Image src={logo} width={200} alt='logo'/>
        </Link>
        <div className="flex gap-8 font-medium cursor-pointer">
            <Link href='/user_manual' >
                <p className='hover:underline'>User Manual</p>
            </Link>
            <p className='hover:underline'>Demo</p>
            <p className='hover:underline'>Features</p>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-3xl font-semibold cursor-pointer">Log in</button>
        </nav>
    </div>
    )
}
export default Header