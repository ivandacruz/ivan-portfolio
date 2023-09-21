import Link from 'next/link';
import React from 'react'

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={''} className='hover:text-accent transition-all duration-300'>
        <RiYoutubeLine />
      </Link>
      <Link href={''} className='hover:text-[#c13584] transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={''} className='hover:text-[#1877f2] transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={''} className='hover:text-[#ea4c89] transition-all duration-300'>
        <RiDribbbleLine />
      </Link>
      <Link href={''} className='hover:text-[#1769ff] transition-all duration-300'>
        <RiBehanceLine />
      </Link>
      <Link href={''} className='hover:text-[#e60023] transition-all duration-300'>
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;