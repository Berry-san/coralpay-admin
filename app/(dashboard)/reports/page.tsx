"use client";

import { format } from "date-fns";
import { CalendarIcon, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import type { DateRange } from "react-day-picker";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ReportEntry {
  id: string;
  date: string;
  loginTime: string;
  organization: string;
  comments: string;
  status: "Resolved" | "Review" | "In progress" | "Pending";
}

const mockData: ReportEntry[] = [
  {
    id: "1",
    date: "February 8, 2022",
    loginTime: "1:55 PM",
    organization: "Salesforce",
    comments: "",
    status: "Resolved",
  },
  {
    id: "2",
    date: "February 5, 2022",
    loginTime: "1:55 PM",
    organization: "Intercom",
    comments: "Today's routine will be focused on client followups and lead",
    status: "Review",
  },
  {
    id: "3",
    date: "April 9, 2022",
    loginTime: "1:55 PM",
    organization: "LinkedIn",
    comments: "",
    status: "In progress",
  },
  {
    id: "4",
    date: "May 13, 2022",
    loginTime: "1:55 PM",
    organization: "SendGrid",
    comments: "",
    status: "In progress",
  },
  {
    id: "5",
    date: "May 28, 2022",
    loginTime: "1:55 PM",
    organization: "Slack",
    comments: "General improvements directly with Max and serial progress",
    status: "In progress",
  },
  {
    id: "6",
    date: "June 15, 2022",
    loginTime: "1:55 PM",
    organization: "Zendesk",
    comments: "The entrance for the staff will be through Door 1.1",
    status: "Pending",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
      return "bg-green-100 text-green-800";
    case "Review":
      return "bg-orange-100 text-orange-800";
    case "In progress":
      return "bg-blue-100 text-blue-800";
    case "Pending":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function ReportTable() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [origin, setOrigin] = useState<string>("");
  const [loginTime, setLoginTime] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState<ReportEntry[]>(mockData);
  const [open, setOpen] = useState(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = () => {
    let filtered = mockData;

    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.comments.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (origin) {
      filtered = filtered.filter((item) => item.organization === origin);
    }

    if (loginTime) {
      filtered = filtered.filter((item) => item.loginTime === loginTime);
    }

    if (dateRange?.from && dateRange?.to) {
      filtered = filtered.filter((item) => {
        const itemDate = new Date(item.date);
        return itemDate >= dateRange.from! && itemDate <= dateRange.to!;
      });
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setDateRange(undefined);
    setOrigin("");
    setLoginTime("");
    setSearchQuery("");
    setFilteredData(mockData);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        {/* <div className="flex items-center gap-3">
          <Button variant="outline" className="text-primary border-primary">
            Schedule Reports
          </Button>
          <Button variant="default">+ Customize</Button>
        </div> */}
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Date Range Picker */}
          <div className="col-span-3 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Range
            </label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dateRange?.from && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from && dateRange?.to
                    ? `${format(dateRange.from, "dd MMM yyyy")} - ${format(
                        dateRange.to,
                        "dd MMM yyyy"
                      )}`
                    : "Pick a date range"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={setDateRange}
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Origin */}
          <div className="col-span-3 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Origin
            </label>
            <Select value={origin} onValueChange={setOrigin}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select organization" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(new Set(mockData.map((d) => d.organization))).map(
                  (org) => (
                    <SelectItem key={org} value={org}>
                      {org}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          {/* Login Time */}
          <div className="col-span-3 lg:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login Time
            </label>
            <Select value={loginTime} onValueChange={setLoginTime}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose time" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(new Set(mockData.map((d) => d.loginTime))).map(
                  (time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button onClick={handleSearch} className="px-8">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" onClick={resetFilters}>
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 w-64"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>DATE</TableHead>
              <TableHead>LOGIN TIME</TableHead>
              <TableHead>ORGANIZATION</TableHead>
              <TableHead>COMMENTS</TableHead>
              <TableHead>STATUS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.loginTime}</TableCell>
                <TableCell>{item.organization}</TableCell>
                <TableCell className="max-w-xs truncate">
                  {item.comments}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
