import React from 'react'
import StatusCard from '../components/classic/cards/StatusCard'
import NetProfitCard from '../components/classic/cards/NetProfitCard'
import CategoryCard from '../components/classic/cards/CategoryCard'
import BarChartComponent from '../components/classic/charts/BarChartComponent'
import RecentTable from '../components/classic/cards/RecentTable'

const DashBoard = () => {
  return (
    <div className='w-full md:w-full text-white'>
      <div className='max-w-[1200px] p-2 mx-auto'>
        <h1 className='mb-8 text-xl'>Dashboard</h1>
        <div className='flex flex-wrap mb-6 gap-6 md:gap-8 md:grid grid-cols-3 grid-rows-6'>
          <div className='flex justify-evenly items-center flex-wrap gap-2 gap-y-4 md:grid md:grid-cols-4 md:gap-4 md:col-span-2'>
            <StatusCard trend={true} color={0} />
            <StatusCard trend={false} color={1} />
            <StatusCard trend={true} color={2} />
            <StatusCard trend={false} color={3} />
          </div>
          <div className='flex-grow md:col-span-1'>
            <NetProfitCard trend={true} percentage={70} netProfit={6759.25} trendPercentage={3} />
          </div>
          <div className='md:col-span-2 w-full row-span-2 h-full'>
            <BarChartComponent />
          </div>
          <div className='w-full md:col-span-1 row-span-2 h-full'>
            <CategoryCard />
          </div>
          <div className='md:col-span-2 w-full row-span-3 h-full'>
            <RecentTable />
          </div>
          <div className='w-full md:col-span-1 row-span-3 h-full'>
            <CategoryCard />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DashBoard


