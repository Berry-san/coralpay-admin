import {
  Building2Icon,
  CodeSquareIcon,
  Scroll,
  TextSelectionIcon,
  UserCircle2,
} from "lucide-react";
import { LuCreditCard } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";

export interface INavigationItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: INavigationItem[];
}

export const adminSidebarNavigation: INavigationItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  // {
  //   label: "Customers",
  //   path: "/customers",
  //   icon: <UserCircle2 />,
  // },
  {
    label: "Organizations",
    icon: <Building2Icon />,
    path: "/organization",
    children: [
      {
        label: "Merchants",
        path: "/merchants",
        icon: <LuCreditCard />,
      },
      {
        label: "Contacts",
        path: "/organizations/contacts",
        icon: <LuCreditCard />,
      },
    ],
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: <LuCreditCard />,
  },
  {
    label: "Assign USSD",
    path: "/assign-ussd",
    icon: <CodeSquareIcon />,
  },
  {
    label: "Reports",
    icon: <TextSelectionIcon />,
    path: "/reports",
  },
  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: <Scroll />,
  },
  // {
  //   label: "Settings",
  //   path: "/settings",
  //   icon: <LuCreditCard />,
  // },
];

export const merchantSidebarNavigation: INavigationItem[] = [
  {
    label: "Home",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: <UserCircle2 />,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: <LuCreditCard />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <TextSelectionIcon />,
  },
  {
    label: "Apply for USSD",
    path: "/ussd-application",
    icon: <CodeSquareIcon />,
  },

  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: <Scroll />,
  },
];
