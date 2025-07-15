// import { Button } from "@/components/ui/button";
// import React from "react";
// import { ChartPieDonut } from "../../../components/PieChart";
// import { ChartConfig } from "@/components/ui/chart";
// import { ChartAreaLegend } from "@/components/AreaChart";
// import { User2Icon } from "lucide-react";

// const chartData = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
// ];

// const chartData1 = [
//   { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "#4C0463",
//   },
//   safari: {
//     label: "Safari",
//     color: "#05426C",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "#AC869B",
//   },
// } satisfies ChartConfig;

// const chartConfig1 = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "#00328B",
//   },
//   safari: {
//     label: "Safari",
//     color: "#6356D7",
//   },
// } satisfies ChartConfig;

// const HomePage = () => {
//   return (
//     <>
//       <div className="flex items-center justify-end space-x-4">
//         <Button>Apply for dedicated USSD</Button>
//         <Button>Transactions</Button>
//       </div>
//       <div className="flex flex-col w-1/3 rounded-t-md shadow-md rounded-md">
//         <div className="flex flex-col bg-primary py-4 px-4 rounded-t-md text-white">
//           <p className="">Assigned USSD</p>
//           <p className="text-5xl font-bold">*999*2#</p>
//         </div>
//         <div className="flex items-center justify-end space-x-4 py-6 px-4 rounded-b-md bg-white">
//           <Button className="bg-[#AC869B]">Assign USSD</Button>
//           <Button>Simulate</Button>
//         </div>
//       </div>
//       <div className="border w-full rounded-md p-6 mt-6">
//         <p className="font-bold text-2xl">Transaction History</p>
//         <div className="grid grid-cols-5 gap-4 text-[#00328B] mt-4">
//           <div className="flex space-x-4 items-start justify-center">
//             <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
//             <div className="flex flex-col">
//               <span className="text-3xl font-bold">300</span>
//               <span className="text-lg">Customers</span>
//             </div>
//           </div>
//           <div className="flex space-x-4 items-center justify-center">
//             <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
//             <div className="flex flex-col">
//               <span className="text-3xl font-bold">300</span>
//               <span className="text-lg">Customers</span>
//             </div>
//           </div>
//           <div className="flex space-x-4 items-center justify-center">
//             <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
//             <div className="flex flex-col">
//               <span className="text-3xl font-bold">300</span>
//               <span className="text-lg">Customers</span>
//             </div>
//           </div>
//           <div className="flex space-x-4 items-center justify-center">
//             <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
//             <div className="flex flex-col">
//               <span className="text-3xl font-bold">300</span>
//               <span className="text-lg">Customers</span>
//             </div>
//           </div>
//           <div className="flex space-x-4 items-center justify-center">
//             <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
//             <div className="flex flex-col">
//               <span className="text-3xl font-bold">300</span>
//               <span className="text-lg">Customers</span>
//             </div>
//           </div>
//         </div>
//         <div className="w-full flex divide-x divide-gray-300 mt-4">
//           <div className="w-2/3  flex flex-col">
//             <div className="py-4 border-b grid grid-cols-1 md:grid-cols-2 gap-4">
//               <ChartPieDonut
//                 chartData={chartData}
//                 chartConfig={chartConfig}
//                 number="300"
//                 text="Customers"
//                 header="Assigned USSD"
//               />
//               <ChartPieDonut
//                 chartData={chartData1}
//                 chartConfig={chartConfig1}
//                 number="300"
//                 text="Customers"
//                 header="Assigned USSD"
//               />
//             </div>
//             <div className="py-4">
//               <ChartAreaLegend />
//             </div>
//           </div>
//           <div className="w-1/3 flex flex-col gap-4">
//             <ChartPieDonut
//               chartData={chartData}
//               chartConfig={chartConfig}
//               number="300"
//               text="Customers"
//               header="Assigned USSD"
//             />
//             <ChartPieDonut
//               chartData={chartData}
//               chartConfig={chartConfig}
//               number="300"
//               text="Customers"
//               header="Assigned USSD"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;
"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CircleDollarSign,
  Package,
  Plus,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const stats = [
    {
      title: "Total Organization Created",
      value: "10293",
      change: "+1.3% Up from past week",
      trend: "up",
      icon: Package,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Total Admin Created",
      value: "40,689",
      change: "+8.5% Up from yesterday",
      trend: "up",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Active Users",
      value: "89,000",
      change: "-4.3% Down from yesterday",
      trend: "down",
      icon: Users,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Average Account Created Per Day",
      value: "500",
      change: "+1.8% Up from yesterday",
      trend: "up",
      icon: CircleDollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const tasks = [
    {
      title: "Task Title",
      time: "6:00 AM",
      description: "Task Details",
      status: "pending",
    },
    {
      title: "Task Title",
      time: "6:00 AM",
      description: "Task Details",
      status: "cancelled",
    },
    {
      title: "Task Title",
      time: "6:00 AM",
      description: "Task Details",
      status: "pending",
    },
  ];

  const reports = [
    { type: "Complaint", status: "Resolved", time: "1:55 PM" },
    { type: "Inquiry", status: "Resolved", time: "1:55 PM" },
    { type: "Inquiry", status: "Open", time: "1:55 PM" },
    { type: "Complaint", status: "In Progress", time: "1:55 PM" },
    { type: "Complaint", status: "Open", time: "1:55 PM" },
    { type: "Inquiry", status: "In Progress", time: "1:55 PM" },
    { type: "Inquiry", status: "Resolved", time: "1:55 PM" },
  ];

  const recentActivities = [
    {
      action: "Created Area",
      admin: "Darlene Robertson",
      time: "Mon 26/1 9:55 PM",
    },
    {
      action: "Created Area",
      admin: "Theresa Cooper",
      time: "Tue 27/2 5:55 PM",
    },
    { action: "Created Area", admin: "Guy Hawkins", time: "Mon 26/1 9:55 PM" },
    { action: "Created Area", admin: "Robert Fox", time: "Tue 27/2 6:55 PM" },
    { action: "Created Area", admin: "Devon Lane", time: "Mon 26/1 9:55 PM" },
    { action: "Created Area", admin: "Cody Fisher", time: "Tue 27/2 6:55 PM" },
    {
      action: "Created Area",
      admin: "Bruce Colleen",
      time: "Mon 26/1 9:55 PM",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "success";
      case "pending":
        return "pending";
      case "cancelled":
        return "destructive";
      case "open":
        return "destructive";
      case "in progress":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-3 md:col-span-2">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center gap-1 text-sm">
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-600" />
                      )}
                      <span
                        className={
                          stat.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="shadow-card col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="secondary" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                Organization
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                <Plus className="mr-2 h-4 w-4" />
                Billing
              </Button>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <select className="flex-1 px-3 py-2 border border-input rounded-md text-sm">
                    <option>First Bank</option>
                  </select>
                  <select className="flex-1 px-3 py-2 border border-input rounded-md text-sm">
                    <option>Date Range</option>
                  </select>
                </div>
                <Button variant="secondary" className="w-full">
                  Generate Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="shadow-card col-span-3 md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              April 2024
              <Button variant="ghost" size="sm">
                View Schedules
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full"
            />
            <div className="mt-4 space-y-2">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded border"
                >
                  <div>
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {task.time} {task.description}
                    </p>
                  </div>
                  <Badge variant={getStatusColor(task.status) as any}>
                    {task.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports and Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reports */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Reports
              <Button variant="ghost" size="sm">
                View All Queries
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                <span>ALERT TYPE</span>
                <span>STATUS</span>
                <span>TIME STAMP</span>
                <span></span>
              </div>
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 py-2 text-sm border-b border-border/50"
                >
                  <span>{report.type}</span>
                  <Badge
                    variant={getStatusColor(report.status) as any}
                    className="w-fit"
                  >
                    {report.status}
                  </Badge>
                  <span className="text-muted-foreground">{report.time}</span>
                  <span></span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                <span>ACTION</span>
                <span>ORG ADMIN</span>
                <span>DATE/TIME</span>
              </div>
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-4 py-2 text-sm border-b border-border/50"
                >
                  <span>{activity.action}</span>
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs">
                        {activity.admin.charAt(0)}
                      </span>
                    </div>
                    <span>{activity.admin}</span>
                  </div>
                  <span className="text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
