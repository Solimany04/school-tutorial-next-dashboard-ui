import React from 'react'
import UserCard from '@/components/UserCard'
import CountChart from '@/components/CountChart'
import AttendanceChart from '@/components/AttendanceChart'
import FinanceChart from '@/components/FinanceChart'
import EventCalendar from '@/components/EventCalendar'
import Announements from '@/components/Announements'
import ChartLineDots from '@/components/chart-line-dots'


const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
      {/* UserCards */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type='students' />
        <UserCard type='teachers' />
        <UserCard type='parents' />
        <UserCard type='staffs' />
      </div>
      {/* middle charts */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* count chart */}
        <div className=" w-full lg:w-1/3 h-[450px]">
        <CountChart/>
        </div>
        {/* attendance chart */}
        <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart/>
        </div>
      </div>
      {/* bottom charts */}
      <div className="w-full h-[500px]">
        <FinanceChart/>
        <ChartLineDots/>
      </div>
      </div>

      {/* RIght */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar/>
      <Announements/>
      </div>
    
    </div>
  )
}

export default AdminPage
