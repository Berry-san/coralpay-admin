// components/users/columns.ts
'use client'
import { ColumnDef } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export type User = {
  name: string
  email: string
  phone: string
  business: string
  industry: string
  registered: string
  avatar?: string
}

export const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'datetime',
    header: 'Date/Time',
    cell: ({ row }) => (
      <div className="text-sm font-medium text-gray-900">
        {row.original.datetime}
      </div>
    ),
  },
  {
    accessorKey: 'customer',
    header: 'Customers',
    cell: ({ row }) => (
      <div className="text-sm text-gray-900 leading-tight">
        <div>{row.original.customer}</div>
        <div className="text-xs text-muted-foreground">
          {row.original.email}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'plan',
    header: 'Plan',
    cell: ({ row }) => (
      <div className="text-sm uppercase tracking-wide">{row.original.plan}</div>
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <div className="text-sm text-muted-foreground">
        {row.original.description}
      </div>
    ),
  },
]
