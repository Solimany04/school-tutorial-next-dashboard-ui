"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    name: "Jan",
    income: 5234,
    expense: 3142,
  },
  {
    name: "Feb",
    income: 7891,
    expense: 4567,
  },
  {
    name: "Mar",
    income: 3456,
    expense: 8123,
  },
  {
    name: "Apr",
    income: 6234,
    expense: 2987,
  },
  {
    name: "May",
    income: 4567,
    expense: 5678,
  },
  {
    name: "Jun",
    income: 8234,
    expense: 3456,
  },
  {
    name: "Jul",
    income: 5678,
    expense: 6234,
  },
  {
    name: "Aug",
    income: 7123,
    expense: 4891,
  },
  {
    name: "Sep",
    income: 4234,
    expense: 5123,
  },
  {
    name: "Oct",
    income: 6789,
    expense: 7456,
  },
  {
    name: "Nov",
    income: 5432,
    expense: 3789,
  },
  {
    name: "Dec",
    income: 8567,
    expense: 6234,
  },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function ChartLineDots() {
  return (
    <Card>
      <div className="bg-white rounded-xl w-full h-full p-4">
        <div className=" flex justify-between items-center">
          <h1 className="text-lg font-semibold">Finance</h1>
          <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
      </div>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="income"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={5}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
            <Line
              dataKey="expense"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={5}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
