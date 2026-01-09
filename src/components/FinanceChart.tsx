"use client";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ResponsiveContainer } from "recharts";

// #region Sample data
const data = [
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
// #endregion

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tick={{ fill: "#d1d5db" }}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            className=""
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
