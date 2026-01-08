"use client";

import { TrendingUp } from "lucide-react";
import { RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { classesData } from "@/lib/data";

export const description = "A radial chart";

const chartData = [
  {
    name: "Total",
    count: 102,
    fill: "white",
    className:"hidden",
  },
  {
    name: "Girls",
    count: 50,
    fill: `#FAE27C`,
  },
  {
    name: "Boys",
    count: 52,
    fill: "#C3EBFA",
  },
];

const sadsad = [
  { name: "chrome", count: 400, fill: "var(--color-chrome)" },
  { name: "safari", count: 200, fill: "var(--color-safari)" },
  { name: "firefox", count: 187, fill: "var(--color-firefox)" },
  { name: "edge", count: 173, fill: "var(--color-edge)" },
  { name: "other", count: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function ChartRadialSimple() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Radial Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="name" />}
            />
            <RadialBar dataKey="count" background />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total count for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
