import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1140px] mx-auto flex justify-between item-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image 
            src="/logo.svg"
            alt="Car Catalog Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar