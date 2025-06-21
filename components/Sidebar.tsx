'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { MerchantSidebarLinks } from '@/constants/navigation'
// import LogoutButton from '../atoms/LogoutButton'
import { ChevronDown } from 'lucide-react'
import { INavigationItem, sidebarNavigation } from '@/constants/navigation'
import Image from 'next/image'

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef<HTMLButtonElement>(null)
  const sidebar = useRef<HTMLElement>(null)
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false)
  const [overlayActive, setOverlayActive] = useState<boolean>(false)

  useEffect(() => {
    const storedSidebarExpanded = sessionStorage.getItem('sidebar-expanded')
    setSidebarExpanded(storedSidebarExpanded === 'true')

    if (sidebarExpanded) {
      document.body.classList.add('sidebar-expanded')
    } else {
      document.body.classList.remove('sidebar-expanded')
    }
    setOverlayActive(sidebarOpen)
  }, [sidebarExpanded, sidebarOpen])

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return
      setSidebarOpen(false)
    }

    const resizeHandler = () => {
      if (window.innerWidth >= 1279) {
        setSidebarOpen(false)
        setOverlayActive(false)
        setSidebarExpanded(false)
      }
    }

    document.addEventListener('click', clickHandler)
    window.addEventListener('resize', resizeHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
      window.removeEventListener('resize', resizeHandler)
    }
  }, [sidebarOpen, setSidebarOpen])

  return (
    <div className="relative rounded-full scrollbar">
      {overlayActive && window.innerWidth <= 1024 && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black opacity-40"
        />
      )}
      <aside
        ref={sidebar}
        className={`fixed left-0 top-0 inset-0 z-40 flex h-screen w-80 lg:w-64 flex-col overflow-y-hidden bg-sidebar text-white duration-300 ease-linear lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-end gap-2 pt-5 lg:hidden">
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <Link
          href={'/overview'}
          className="flex items-center justify-center gap-2 my-4"
        >
          <Image
            src={'/images/coralpayLogo.png'}
            alt="Ethica Logo"
            width={60}
            height={60}
          />
        </Link>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full overflow-y-auto duration-300 ease-linear">
          <div className="flex-grow overflow-y-auto">
            <nav className="py-8">
              <ul className="flex flex-col gap-2">
                {sidebarNavigation.map((link) => (
                  <SidebarLinks
                    key={link.path}
                    link={link}
                    onClick={() => setSidebarOpen(false)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}

interface SidebarLinksProps {
  link: INavigationItem
  onClick: () => void
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ link, onClick }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const pathname = usePathname()

  const hasChildren = !!link.children?.length
  const isActive = pathname.endsWith(link.path) || pathname === link.path

  const toggleSubLinks = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <li>
      <div
        onClick={() => {
          if (hasChildren) {
            toggleSubLinks()
          } else {
            onClick()
          }
        }}
        className={`flex items-center justify-between cursor-pointer px-10 py-2 ${
          isActive
            ? 'bg-primary/25 text-white font-semibold border-l-3 border-[#DDE2FF]'
            : 'hover:bg-white/10 text-text-primary'
        }`}
      >
        {hasChildren ? (
          <div className="flex items-center gap-4">
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </div>
        ) : (
          <Link href={link.path} className="flex items-center gap-4 w-full">
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        )}
        {hasChildren && (
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className=" mt-2 space-y-1">
          {link.children?.map((sub) => (
            <li key={sub.path}>
              <Link
                href={sub.path}
                onClick={onClick}
                className={`flex items-center gap-3 px-6 py-2 ml-4 text-sm rounded-md ${
                  pathname === sub.path
                    ? 'text-primary bg-white'
                    : 'text-text-primary hover:bg-primary/25'
                }`}
              >
                <span className="text-xl">{sub.icon}</span>
                <span>{sub.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default Sidebar
