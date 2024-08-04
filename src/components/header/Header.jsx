import React, { useState } from 'react'
import Search from '../classic/search/Search'
import NavIcon from '../classic/profile/NavIcon'
import { FaAd, FaAnchor, FaBell, FaCog, FaMailBulk } from 'react-icons/fa';
import Img from '../classic/profile/Img';

const Header = () => {
    const[miniNotify, setMiniNotify]= useState(false);

    const hideNotifybar = ()=>{
        miniNotify ? setMiniNotify(false) : setMiniNotify(true)
    }
  return (
    <header className='bg-slate-900 p-4 flex gap-6 justify-between items-center sticky top-0 z-50'>
        <Search></Search>
        <div className='flex justify-center items-center gap-8'>
            <div className='hidden md:flex justify-center items-center gap-4'>
                <NavIcon component={<FaCog />} hasUpdate={false}/>
                <NavIcon component={<FaAnchor />} hasUpdate={false}/>
                <NavIcon component={<FaBell />} hasUpdate={true}/>
            </div>
            <div className='relative bg-slate-900 block md:hidden'>
                <div onClick={hideNotifybar}>
                    <NavIcon component={<FaMailBulk />} hasUpdate={true}/>
                </div>
                <div onClick={hideNotifybar} className={`absolute bg-slate-900/85 px-2 pt-6 py-4 left-[-7px] flex flex-col transition-transform duration-300 ease-out justify-center items-center gap-4 ${miniNotify ? "translate-x-0" : 'translate-y-[-500px]' }`}>
                    <NavIcon component={<FaCog />} hasUpdate={false}/>
                    <NavIcon component={<FaAnchor />} hasUpdate={false}/>
                    <NavIcon component={<FaBell />} hasUpdate={true}/>
                </div>
            </div>
            <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s" className="w-8 h-8 rounded-full"/>
        </div>
    </header>
  )
}

export default Header