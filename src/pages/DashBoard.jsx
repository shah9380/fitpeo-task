import React from 'react'
import StatusCard from '../components/classic/cards/StatusCard'
import NetProfitCard from '../components/classic/cards/NetProfitCard'
import CategoryCard from '../components/classic/cards/CategoryCard'
import BarChartComponent from '../components/classic/charts/BarChartComponent'
import RecentTable from '../components/classic/cards/RecentTable'
import TestimonialCard from '../components/classic/cards/TestimonialCard'

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
          <div className='w-full bg-[#1F2029] rounded-md p-4 md:col-span-1 row-span-3 h-full'>
            <h2 className='text-lg md:text-2xl mb-4'>Customer's FeedBack</h2>
            <div className='overflow-y-auto h-[400px] pr-4'>
               <TestimonialCard name={"Andrew Tania"} message={"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"} rating={5} image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} />
               <TestimonialCard name={"Andrew Tania"} message={"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"} rating={5} image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} />
               <TestimonialCard name={"Andrew Tania"} message={"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"} rating={5} image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} />
               <TestimonialCard name={"Andrew Tania"} message={"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"} rating={5} image={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"} />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default DashBoard


