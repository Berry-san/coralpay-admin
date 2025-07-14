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

export const userColumns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      const { name, avatar } = row.original
      return (
        <div className="flex items-center gap-2">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-muted" />
          )}
          <span>{name}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => (
      <span className="lowercase">{row.getValue('email')}</span>
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'business',
    header: 'Business',
  },
  {
    accessorKey: 'industry',
    header: 'Industry',
  },
  {
    accessorKey: 'registered',
    header: 'Registered',
  },
  {
    id: 'actions',
    cell: () => (
      <Button
        variant="outline"
        className="text-primary text-xs border-2 border-secondary rounded-full"
        size="sm"
      >
        DETAILS
      </Button>
    ),
  },
]
