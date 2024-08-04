import React from 'react'

const NavIcon = ({component, hasUpdate}) => {
  return (
    <div className='bg-gray-500/50 p-2 rounded-full text-white/80 relative'>
        {component}
        {
            hasUpdate && <span className='font-extrabold text-2xl absolute top-[-12px] right-[8px] text-blue-600'>.</span>
        }
    </div>
  )
}

export default NavIcon