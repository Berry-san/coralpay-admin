'use client'

import { DataTable } from '@/components/ui/DataTable'
import { userColumns } from './column'
import { userData } from './data'

export default function UsersPage() {
  return (
    <DataTable
      columns={userColumns}
      data={userData}
      searchableKeys={['name', 'email']}
    />
  )
}
