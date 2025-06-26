'use client'

import { DataTable } from '@/components/ui/DataTable'
import { columns } from './column'
import { auditData } from './data'

export default function UsersPage() {
  return (
    <>
      <div className="border-b">
        <p className="border-b-2 px-6 py-2 w-fit border-secondary">
          Activity Log
        </p>
      </div>
      <div className=""></div>
      <DataTable
        columns={columns}
        data={auditData}
        searchableKeys={['customer', 'email']}
      />
    </>
  )
}
