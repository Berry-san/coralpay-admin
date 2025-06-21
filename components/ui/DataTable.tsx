'use client'

import * as React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
  getFilteredRowModel,
  FilterFn,
} from '@tanstack/react-table'

import { ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchableKeys?: (keyof TData)[]
  searchPlaceholder?: string
  exportable?: boolean
}

export function DataTable<TData extends Record<string, any>, TValue>({
  columns,
  data,
  searchableKeys = [],
  searchPlaceholder = 'Search by name or email...',
  exportable = false,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pageSize, setPageSize] = React.useState<number>(10)
  const [search, setSearch] = React.useState('')

  const globalFilterFn: FilterFn<TData> = (row, columnId, filterValue) => {
    if (!searchableKeys.includes(columnId as keyof TData)) return false
    const value = row.getValue(columnId)
    return String(value ?? '')
      .toLowerCase()
      .includes(filterValue.toLowerCase())
  }

  const allColumns = [
    {
      id: 'checkbox',
      header: () => (
        <input type="checkbox" className="w-3 h-3 accent-purple-600" readOnly />
      ),
      cell: () => (
        <input type="checkbox" className="w-3 h-3 accent-purple-600" readOnly />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    ...columns,
  ]

  const table = useReactTable({
    data,
    columns: allColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setSearch,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      globalFilter: search,
    },
  })

  React.useEffect(() => {
    table.setPageSize(pageSize)
  }, [pageSize])

  const handleExportCSV = () => {
    const headers = table
      .getAllColumns()
      .filter(
        (col) =>
          col.getIsVisible() && col.id !== 'select' && col.id !== 'actions'
      )
      .map((col) => col.id)

    const rows = table
      .getFilteredRowModel()
      .rows.map((row) => headers.map((key) => row.original[key] ?? ''))

    const csvContent = [headers, ...rows]
      .map((e) => e.map((v) => `"${v}"`).join(','))
      .join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'table-data.csv')
    link.click()
  }

  const handleExportPDF = () => {
    const doc = new jsPDF()
    const headers = table
      .getAllColumns()
      .filter(
        (col) =>
          col.getIsVisible() && col.id !== 'select' && col.id !== 'actions'
      )
      .map((col) => col.id)

    const rows = table
      .getFilteredRowModel()
      .rows.map((row) => headers.map((key) => row.original[key] ?? ''))

    autoTable(doc, {
      head: [headers],
      body: rows,
    })

    doc.save('table-data.pdf')
  }

  const pageIndex = table.getState().pagination.pageIndex
  const start = pageIndex * pageSize + 1
  const end = Math.min(
    start + pageSize - 1,
    table.getFilteredRowModel().rows.length
  )
  const total = table.getFilteredRowModel().rows.length

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64"
          />
          {exportable && (
            <>
              <Button
                size={'lg'}
                className="bg-secondary"
                onClick={handleExportCSV}
              >
                Export CSV
              </Button>{' '}
              <Button
                size={'lg'}
                className="bg-primary"
                onClick={handleExportPDF}
              >
                Export PDF{' '}
              </Button>
            </>
          )}
        </div>
      </div>

      <div className="overflow-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-white z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-[#334D6E]">
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="h-[56px] text-tableGray"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="text-muted-foreground text-sm">
          Showing {start}–{end} of {total} entries (Page {pageIndex + 1} of{' '}
          {table.getPageCount()})
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Rows per page:
            </span>
            <Select
              value={String(pageSize)}
              onValueChange={(value) => setPageSize(Number(value))}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                {[10, 25, 50, 100].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            First
          </Button> */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight size={16} />
          </Button>

          {/* <Button
            variant="outline"
            size="sm"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            Last
          </Button> */}
        </div>
      </div>
    </div>
  )
}
