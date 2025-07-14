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
    label: "Home",
    path: "/homepage",
    icon: <MdDashboard />,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: <UserCircle2 />,
  },
  {
    label: "Organizations",
    icon: <Building2Icon />,
    path: "/organization",
    children: [
      {
        label: "Merchants",
        path: "/organizations",
        icon: <LuCreditCard />,
      },
      {
        label: "Contacts",
        path: "/organization/contacts",
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
    label: "Assign Code",
    path: "/assign-code",
    icon: <CodeSquareIcon />,
  },
  {
    label: "Reports",
    icon: <TextSelectionIcon />,
    path: "/reports",
    children: [
      {
        label: "General Report",
        path: "/general-report",
        // icon: <LuCreditCard />,
      },
      {
        label: "Customized Report",
        path: "/custom-report",
        // icon: <LuCreditCard />,
      },
    ],
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
    path: "/homepage",
    icon: <MdDashboard />,
  },
  {
    label: "User Management",
    path: "/user-management",
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
    children: [
      {
        label: "General Report",
        path: "/general-report",
        // icon: <LuCreditCard />,
      },
      {
        label: "Customized Report",
        path: "/custom-report",
        // icon: <LuCreditCard />,
      },
    ],
  },
  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: <Scroll />,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: <LuCreditCard />,
  },
];
