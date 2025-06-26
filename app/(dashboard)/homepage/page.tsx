import { Button } from "@/components/ui/button";
import React from "react";
import { ChartPieDonut } from "../../../components/PieChart";
import { ChartConfig } from "@/components/ui/chart";
import { ChartAreaLegend } from "@/components/AreaChart";
import { User2Icon } from "lucide-react";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
];

const chartData1 = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#4C0463",
  },
  safari: {
    label: "Safari",
    color: "#05426C",
  },
  firefox: {
    label: "Firefox",
    color: "#AC869B",
  },
} satisfies ChartConfig;

const chartConfig1 = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#00328B",
  },
  safari: {
    label: "Safari",
    color: "#6356D7",
  },
} satisfies ChartConfig;

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-end space-x-4">
        <Button>Apply for dedicated USSD</Button>
        <Button>Transactions</Button>
      </div>
      <div className="flex flex-col w-1/3 rounded-t-md shadow-md rounded-md">
        <div className="flex flex-col bg-primary py-4 px-4 rounded-t-md text-white">
          <p className="">Assigned USSD</p>
          <p className="text-5xl font-bold">*999*2#</p>
        </div>
        <div className="flex items-center justify-end space-x-4 py-6 px-4 rounded-b-md bg-white">
          <Button className="bg-[#AC869B]">Assign USSD</Button>
          <Button>Simulate</Button>
        </div>
      </div>
      <div className="border w-full rounded-md p-6 mt-6">
        <p className="font-bold text-2xl">Transaction History</p>
        <div className="grid grid-cols-5 gap-4 text-[#00328B] mt-4">
          <div className="flex space-x-4 items-center justify-center">
            <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-lg">Customers</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-lg">Customers</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-lg">Customers</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-lg">Customers</span>
            </div>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <User2Icon className="w-10 h-10 text-white p-2 bg-[#00328B] rounded" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold">300</span>
              <span className="text-lg">Customers</span>
            </div>
          </div>
        </div>
        <div className="w-full flex divide-x divide-gray-300 mt-4">
          <div className="w-2/3  flex flex-col">
            <div className="py-4 border-b grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChartPieDonut
                chartData={chartData}
                chartConfig={chartConfig}
                number="300"
                text="Customers"
                header="Assigned USSD"
              />
              <ChartPieDonut
                chartData={chartData1}
                chartConfig={chartConfig1}
                number="300"
                text="Customers"
                header="Assigned USSD"
              />
            </div>
            <div className="py-4">
              <ChartAreaLegend />
            </div>
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <ChartPieDonut
              chartData={chartData}
              chartConfig={chartConfig}
              number="300"
              text="Customers"
              header="Assigned USSD"
            />
            <ChartPieDonut
              chartData={chartData}
              chartConfig={chartConfig}
              number="300"
              text="Customers"
              header="Assigned USSD"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
