import { MdDashboard } from "react-icons/md";
import { TbBulb } from "react-icons/tb";
import { MdTv } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { IoWifi } from "react-icons/io5";
import { LuCreditCard } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";

export interface INavigationItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: INavigationItem[];
}

export const sidebarNavigation: INavigationItem[] = [
  {
    label: "Home",
    path: "/homepage",
    icon: <MdDashboard />,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: <LuCreditCard />,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: <LuCreditCard />,
  },
  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: <LuCreditCard />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <LuCreditCard />,
  },
];
