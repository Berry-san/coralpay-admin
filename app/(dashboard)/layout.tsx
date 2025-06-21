'use client'

import { ReactNode, useState } from 'react'
import Sidebar from '@/components/Sidebar'

const Layout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <div className="w-full flex flex-col overflow-hidden bg-white text-text-primary font-poppins">
      <div className="flex w-full h-screen">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div className="flex-1 h-full px-4 py-4 mx-auto max-w-screen-2xl md:px-8 2xl:px-14">
            {children}
          </div>
          {/* <Toaster position="bottom-right" /> */}
        </main>
      </div>
    </div>
  )
}

export default Layout
