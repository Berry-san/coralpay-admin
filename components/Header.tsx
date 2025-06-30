import React from "react";
import { GoBell } from "react-icons/go";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { sidebarNavigation } from "@/constants/navigation";

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let title = "Dashboard";

  if (segments.length === 1 && segments[0] !== "overview") {
    title = segments[0].replace(/-/g, " ");
  } else if (segments.length >= 2) {
    title = segments[1].replace(/-/g, " ");
  }

  if (pathname === "/overview") {
    title = "Dashboard";
  }

  return (
    <div className="sticky top-0 z-30 w-full py-4 mx-auto max-w-screen-2xl px-4 md:px-8 2xl:px-14 flex flex-col bg-[#FAFAFA] border-b border-borderColor">
      {/* Header title and bell icon */}
      <div className="flex items-center justify-between ">
        <div className="text-lg font-semibold">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-40 block p-1.5 lg:hidden"
          >
            <Menu className="w-8 h-8" />
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {pathname?.split("/")[2] ? (
              <>
                {/* <p className="capitalize text-gray-400">Customers</p>
                <p>/</p> */}
                <p className="font-semibold capitalize">
                  {pathname.split("/")[2].split("-").join(" ")}
                </p>
              </>
            ) : (
              <p className="text-black">Dashboard</p>
            )}
          </div>
        </div>
        <div className="text-2xl">
          <GoBell />
        </div>
      </div>
    </div>
  );
};

export default Header;
