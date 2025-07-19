"use client";

import Modal from "@/components/Modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const OrganizationManagement = () => {
  const organizations = [
    {
      id: "ORG-12345",
      name: "First Bank",
      contactPerson: "Darlene Robertson",
      dateCreated: "February 6, 2022",
      status: "Paid",
    },
    {
      id: "ORG-12345",
      name: "Opay",
      contactPerson: "Theresa Cooper",
      dateCreated: "February 6, 2022",
      status: "Paid",
    },
    {
      id: "ORG-12345",
      name: "Moniepoint",
      contactPerson: "Guy Hawkins",
      dateCreated: "April 9, 2022",
      status: "Deactivated",
    },
    {
      id: "ORG-12345",
      name: "UBA",
      contactPerson: "Robert Fox",
      dateCreated: "May 13, 2022",
      status: "Pending",
    },
    {
      id: "ORG-12345",
      name: "Zenith Bank",
      contactPerson: "Devon Lane",
      dateCreated: "May 28, 2022",
      status: "Deactivated",
    },
    {
      id: "ORG-12345",
      name: "FCMB",
      contactPerson: "Cody Fisher",
      dateCreated: "June 11, 2022",
      status: "Pending",
    },
    {
      id: "ORG-12345",
      name: "Sterling IBTC",
      contactPerson: "Bruce Colleen",
      dateCreated: "February 6, 2022",
      status: "Paid",
    },
    {
      id: "ORG-12345",
      name: "Diamond Bank",
      contactPerson: "Tom McCoy",
      dateCreated: "July 13, 2022",
      status: "Paid",
    },
    {
      id: "ORG-12345",
      name: "Kuda MFB",
      contactPerson: "Wade Mckiney",
      dateCreated: "July 31, 2022",
      status: "Paid",
    },
    {
      id: "ORG-12345",
      name: "Pocket App",
      contactPerson: "John Carter",
      dateCreated: "October 8, 2022",
      status: "Deactivated",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "paid":
        return "success";
      case "pending":
        return "pending";
      case "deactivated":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          Organization Management
        </h1>
        <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Organization
        </Button>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground pb-3 border-b">
              <span>ORGANIZATIONS</span>
              <span>ORGANIZATION ID</span>
              <span>CONTACT PERSON</span>
              <span>DATE CREATED</span>
              <span>STATUS</span>
              <span>ACTIONS</span>
            </div>

            {/* Table Rows */}
            {organizations.map((org, index) => (
              <div
                key={index}
                className="grid grid-cols-6 gap-4 py-3 text-sm border-b border-border/50 hover:bg-muted/50 rounded"
              >
                <Link
                  href={`/organization/${org.id}`}
                  className="font-medium text-primary hover:underline"
                >
                  {org.name}
                </Link>
                <span className="text-muted-foreground">{org.id}</span>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {getInitials(org.contactPerson)}
                    </span>
                  </div>
                  <span>{org.contactPerson}</span>
                </div>
                <span className="text-muted-foreground">{org.dateCreated}</span>
                <Badge variant={getStatusVariant(org.status) as any}>
                  {org.status}
                </Badge>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 pt-6">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="bg-primary text-primary-foreground"
            >
              1
            </Button>
            <Button variant="ghost" size="sm">
              2
            </Button>
            <Button variant="ghost" size="sm">
              3
            </Button>
            <span className="px-2">...</span>
            <Button variant="ghost" size="sm">
              10
            </Button>
            <Button variant="ghost" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3 className="text-2xl font-bold mb-4">New Organization</h3>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {/* --- Organization Details Section --- */}
          <div className="col-span-full text-lg font-semibold text-gray-700">
            Organization Details
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Enter organization name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Type
            </label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="">Select type</option>
              <option value="corporate">Corporate</option>
              <option value="non-profit">Non-Profit</option>
              <option value="government">Government</option>
            </select>
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Registration Number
            </label>
            <input
              type="text"
              placeholder="Enter RC/CAC number"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter country"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter organization address"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* --- Contact Details Section --- */}
          <div className="col-span-full text-lg font-semibold text-gray-700 mt-4">
            Contact Details
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Contact Name
            </label>
            <input
              type="text"
              placeholder="Enter contact person's name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* --- Submit Button --- */}
          <div className="col-span-full flex justify-end mt-4">
            <button
              type="submit"
              className="bg-yellow-900 text-white px-6 py-2 rounded-md hover:bg-yellow-800 transition"
            >
              Save Organization
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default OrganizationManagement;
