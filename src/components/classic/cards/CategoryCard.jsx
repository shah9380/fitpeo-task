import React from 'react'
import { FiTarget } from 'react-icons/fi';
import { GiHamburger } from 'react-icons/gi';
import { FaUtensils, FaChevronRight } from 'react-icons/fa';

const CategoryCard = () => {
    const categories = [
        {
            categoryName: "Goals",
            icon: <FiTarget className="text-orange-400" size={24} />,
            bg: 'bg-red-600/40'
        },
        {
            categoryName: "Popular Dishes",
            icon: <GiHamburger className="text-blue-400" size={24} />,
            bg: 'bg-blue-600/40'
        },
        {
            categoryName: "Menus",
            icon: <FaUtensils className="text-teal-400" size={24} />,
            bg: 'bg-teal-600/40'
        }
    ]
  return (
    <div className='bg-[#1F2029] rounded-md p-4 h-full'>
        <ul className='flex flex-col justify-evenly gap-6 h-full'>
            {
                categories.map((item) => <li className='flex justify-between items-center '>
                <div className='flex gap-4 justify-center items-center'>
                    <div className={`${item.bg} p-4 w-fit rounded-full`}>
                        {item.icon}
                    </div>
                    <p>{item.categoryName}</p>
                </div>
                <div className="bg-gray-600 p-2 w-fit rounded-full">
                    <FaChevronRight className="text-white" size={12} />
                </div>
            </li>)
            }
        </ul>
    </div>
  )
}

export default CategoryCard