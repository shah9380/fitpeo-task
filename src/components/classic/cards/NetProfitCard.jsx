import React from 'react'
import { FaSortUp, FaSortDown } from 'react-icons/fa'
import GoalProgress from '../goal/GoalProgress'

const NetProfitCard = ({trend, percentage, netProfit, trendPercentage}) => {
  return (
    <div className='bg-[#1F2029] rounded-md p-4  min-h-28 md:min-w-40 md:min-h-36 lg:min-w-40 lg:min-h-36 flex justify-between'>
            <div className='flex flex-col gap-2 justify-between'>
                <h6 className='text-[12px] md:text-sm'>Net Profit</h6>
                <div className='flex flex-col gap-2'>
                    <h1><span className='text-2xl md:text-4xl font-bold'>$ {netProfit}</span></h1>
                    <small className={`${trend ? 'text-green-500 items-end' : 'text-red-500 items-center'} w-fit font-medium flex justify-center gap-1`}><span>{
                        trend ? <FaSortUp /> : <FaSortDown />
                    }</span><span>{trendPercentage}%</span></small>
                </div>
            </div>
            <div>
                <GoalProgress percentage={percentage} />
            </div>
    </div>
  )
}

export default NetProfitCard