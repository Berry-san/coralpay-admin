import { ColumnDef } from '@tanstack/react-table'

export const ussdColumns: ColumnDef<any>[] = [
  {
    accessorKey: 'serviceId',
    header: 'Service ID',
    cell: ({ row }) => (
      <span className="font-semibold text-[#323C47]">
        {row.original.serviceId}
      </span>
    ),
  },
  {
    accessorKey: 'ussdCode',
    header: 'USSD',
    cell: ({ row }) => <span>{row.original.ussdCode}</span>,
  },
  {
    accessorKey: 'transactionDetails',
    header: 'Transaction details',
    cell: ({ row }) => (
      <span className="truncate text-muted-foreground">
        {row.original.transactionDetails}
      </span>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: ({ row }) => <span>{row.original.date}</span>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <span
        className={`font-medium ${
          row.original.status === 'Successful'
            ? 'text-green-600'
            : 'text-red-600'
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
]
