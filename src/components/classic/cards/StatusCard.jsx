import React, { useEffect, useState } from 'react'
import {  FaPlusCircle, FaSortDown, FaSortUp } from 'react-icons/fa'
import { MdShoppingBag, MdCheckCircle, MdCancel, MdAddShoppingCart, MdAttachMoney } from 'react-icons/md'; // Material Design Icons

const StatusCard = ({trend, color}) => {
    const colors = ['rgb(42,52,101)', 'rgb(18,84,71)', 'rgb(97,51,57)', 'rgb(93,45,77)'];
    const colors_1 = ['rgb(69,101,251)', 'rgb(2,205,142)', 'rgb(244,92,91)', 'rgb(221,74,157)'];
    const colors_2 = ['rgb(110,119,207)', 'rgb(122,217,191)', 'rgb(246,126,137)', 'rgb(93,45,77)'];

    const icons = [ <FaPlusCircle />, <MdCheckCircle />, <MdCancel />, "" ]
    const mainIcons = [<MdAddShoppingCart />, <MdShoppingBag />, <MdShoppingBag />, <MdAttachMoney />]

    const[colour, setColour] = useState(color);
    useEffect(()=>{
        setColour(color);
    },[color])
  return (
    <div>
        {
            colour >= 0  && <div className='bg-[#1F2029] min-w-32 min-h-28 md:min-w-40 md:min-h-36 rounded-md p-4 flex flex-col justify-between'>
            <div>
                <div className={`w-fit p-2 rounded-lg z-10`} style={{backgroundColor: `${colors[colour]}`}}>
                    <div style={{color: `${colors_1[colour]}`}} className={`text-xxl relative w-fit z-0 opacity-70`}>
                        {mainIcons[colour]}
                        {/* <div className='rounded-full bg-white w-fit text-center absolute -bottom-1 -right-[2px]'><span style={{color: `${colors_2[colour]}`}} className={`text-[8px]`}><FaPlusCircle /><MdCancel /></span></div> */}
                        {/* <div className='rounded-full bg-white w-fit text-center absolute -bottom-1 -right-[2px]'><span style={{color: `${colors_2[colour]}`}} className={`text-[8px]`}><MdCancel /></span></div> */}
                        <div className='rounded-full bg-white w-fit text-center absolute -bottom-1 -right-[2px]'><span style={{color: `${colors_2[colour]}`}} className={`text-[8px]`}>{icons[colour]}</span></div>
                    </div>
                </div>
                <small>Total Orders</small>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-2xl md:text-3xl font-bold'>70</p>
                <small className={`${trend ? 'text-green-500 items-end' : 'text-red-500 items-center'} font-medium flex justify-center gap-1`}><span>{
                        trend ? <FaSortUp /> : <FaSortDown />
                    }</span><span>3%</span></small>
            </div>
        </div>
        }
    </div>
  )
}

export default StatusCard