'use client'

import { TrendingUp } from 'lucide-react'
import { Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { Label } from '@/components/ui/label'

export const description = 'A donut chart'

export function ChartPieDonut({
  chartData,
  chartConfig,
  number,
  text,
  header,
}: {
  chartData: any
  chartConfig: any
  number: string
  text: string
  header: string
}) {
  return (
    <div className="flex flex-col">
      <CardHeader className="items-center justify-center pb-0">
        <CardTitle>{header}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
              //   label={({ cx, cy }) => {
              //     return (
              //       <text
              //         x={cx}
              //         y={cy}
              //         textAnchor="middle"
              //         dominantBaseline="middle"
              //       >
              //         <tspan
              //           x={cx}
              //           y={cy}
              //           className="fill-foreground text-3xl font-bold"
              //         >
              //           1K{' '}
              //         </tspan>
              //         <tspan
              //           x={cx}
              //           y={(cy || 0) + 24}
              //           className="fill-muted-foreground"
              //         >
              //           Visitors
              //         </tspan>
              //       </text>
              //     )
              //   }}
            />
            <ChartLegend
              layout="vertical"
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex gap-2"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </div>
  )
}
