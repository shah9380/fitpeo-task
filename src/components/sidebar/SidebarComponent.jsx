import React, { useEffect, useState } from 'react'
import ApplicationBarIcon from '../icons/ApplicationBarIcon';
import { FaHome, FaChartBar, FaRegListAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';

const SidebarComponent = () => {
  const[toggled,setToggled] = useState(false);
  const[selected, setSelected] = useState(1);
  useEffect(()=>{
  },[])

  return (
    <aside className={`bg-slate-900 flex flex-col justify-between py-2 pt-4 pb-10 w-fit h-[100vh] ${toggled ? "fixed z-50": "sticky"}  md:min-h-screen top-0 left-0`}>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='px-6 py-1' onClick={()=>{toggled ? setToggled(false) : setToggled(true)}}><ApplicationBarIcon /></div>
        <ul className='flex flex-col gap-6'>
          <li><div onClick={()=>{setSelected(1)}} className={`cursor-pointer flex justify-start items-center gap-6 pr-6 py-1 text-gray-400 ${selected === 1 ? "border-l-4 border-blue-400 pl-5 text-blue-400": "pl-6"} `}><FaHome /><span className={toggled ? "" : "hidden"}>Home</span></div></li>
          <li><div onClick={()=>{setSelected(2)}} className={`cursor-pointer flex justify-start items-center gap-6 pr-6 py-1 text-gray-400 ${selected === 2 ? "border-l-4 border-blue-400 pl-5 text-blue-400": "pl-6"} `}><FaChartBar /><span className={toggled ? "" : "hidden"}>Charts</span></div></li>
          <li><div onClick={()=>{setSelected(3)}} className={`cursor-pointer flex justify-start items-center gap-6 pr-6 py-1 text-gray-400 ${selected === 3 ? "border-l-4 border-blue-400 pl-5 text-blue-400": "pl-6"} `}><FaRegListAlt /><span className={toggled ? "" : "hidden"}>Dashboard</span></div></li>
          <li><div onClick={()=>{setSelected(4)}} className={`cursor-pointer flex justify-start items-center gap-6 pr-6 py-1 text-gray-400 ${selected === 4 ? "border-l-4 border-blue-400 pl-5 text-blue-400": "pl-6"} `}><FaCog /><span className={toggled ? "" : "hidden"}>Dashboard</span></div></li>
          <li><div onClick={()=>{setSelected(5)}} className={`cursor-pointer flex justify-start items-center gap-6 pr-6 py-1 text-gray-400 ${selected === 5 ? "border-l-4 border-blue-400 pl-5 text-blue-400": "pl-6"} `}><FaSignOutAlt /><span className={toggled ? "" : "hidden"}>Dashboard</span></div></li>
        </ul>
      </div>
      <div className='px-6 py-1 flex justify-center items-center text-blue-600 mb-24'><FaSignOutAlt /></div>
    </aside>
  );
}

export default SidebarComponent