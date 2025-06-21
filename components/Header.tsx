import React from 'react'
import { GoBell } from 'react-icons/go'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  title: string
}

const Header = ({ sidebarOpen, setSidebarOpen, title }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-30 w-full py-4 mx-auto max-w-screen-2xl px-4 md:px-8 2xl:px-14 flex flex-col bg-[#FAFAFA] border-b border-borderColor">
      {/* Header title and bell icon */}
      <div className="flex items-center justify-between ">
        <div className="text-lg font-semibold">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation()
              setSidebarOpen(!sidebarOpen)
            }}
            className="z-40 block p-1.5 lg:hidden"
          >
            <Menu className="w-8 h-8" />
          </button>
          <p>{title}</p>
        </div>
        <div className="text-2xl">
          <GoBell />
        </div>
      </div>
    </div>
  )
}

export default Header
