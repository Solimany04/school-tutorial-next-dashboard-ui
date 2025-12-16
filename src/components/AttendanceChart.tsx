"use client";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

// #region Sample data
const data = [
  {
    name: "Sun",
    Present: 58,
    Absent: 42,
  },
  {
    name: "Mon",
    Present: 37,
    Absent: 63,
  },
  {
    name: "Tue",
    Present: 50,
    Absent: 50,
  },
  {
    name: "Wed",
    Present: 10,
    Absent: 90,
  },
  {
    name: "Thu",
    Present: 80,
    Absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%" >
        <BarChart width={500} height={500} data={data} barSize={20} className="">
          <CartesianGrid strokeDasharray="3 3" className="" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray"}} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            className=""
          />
          <Bar dataKey="Absent" fill="#FAE27C" legendType="circle" radius={[10,10,0,0]} />
          <Bar dataKey="Present" fill="#C3EBFA" legendType="circle" radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
