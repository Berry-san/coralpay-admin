'use client'
import { ReactNode } from 'react'
import Image from 'next/image'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 h-[100dvh] text-text-primary overflow-hidden font-manrope">
      <div className="hidden lg:block lg:col-span-5 h-full">
        <Image
          src="/images/sideImage.webp"
          alt="Ethica Logo"
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-12 lg:col-span-7 overflow-auto px-6 md:px-20">
        <div className="flex justify-center h-full">
          <div className="w-full max-w-lg">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Layout
