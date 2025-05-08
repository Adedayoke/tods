import Link from 'next/link';
import React from 'react'

export default function Button({children, href}: {children: React.ReactNode; href: string;}) {
  return (
    <Link href={href} className='w-full'>
        <button className='bg-primary-green block px-2 py-3 rounded-lg w-full text-white'>{children}</button>
    </Link>
  )
}
