import { MdDashboard } from 'react-icons/md';
import { LuScrollText } from 'react-icons/lu';
import { MdTv } from 'react-icons/md';
import { User2 } from 'lucide-react';
import { FluentForm48Regular } from '@/components/svg/FormSVG';
import { TdesignMoney } from '@/components/svg/MoneySVG';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoWifi } from 'react-icons/io5';
import { LuCreditCard } from 'react-icons/lu';
import { BillSVG } from '@/components/svg/billSVG';
import { InvestmentSVG } from '@/components/svg/investmentSVG';
import { GoBell } from 'react-icons/go';

export interface ISettingsItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export const settingsNavigation: ISettingsItem[] = [
  {
    label: 'Profile Information',
    path: '/settings/profile-information',
    icon: <User2 className="w-6 h-6" />
  },
  {
    label: 'Business Information',
    path: '/settings/business-information',
    icon: <User2 className="w-6 h-6" />
  },
  {
    label: 'Security Settings',
    path: '/settings/security-settings',
    icon: <User2 className="w-6 h-6" />
  },
  {
    label: 'Notifications Settings',
    path: '/settings/notification-settings',
    icon: <GoBell className="w-6 h-6" />
  },
  {
    label: 'System Settings',
    path: '/settings/system-settings',
    icon: <MdTv className="w-6 h-6" />
  }
];
