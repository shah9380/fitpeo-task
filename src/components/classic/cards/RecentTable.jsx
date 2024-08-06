import React from 'react'
import Img from '../profile/Img'

const profileIcon = ()=>{
    return(<Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s" className="w-8 h-8 rounded-full"/>)
}

const RecentTable = () => {

    const tableConfig = {
        columnNames: ["Customer", "Order No", "Amount", "Status"],
        data : [
            {
                profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsN6p8G0O7uEXXEHRQZx_u2abR07ZT8n_iQ&s",
                firstName: "Wade",
                lastName: "Warrren",
                orderNo: 8329423,
                amount: "250.00",
                status: "Delivered"
            },
            {
              profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsN6p8G0O7uEXXEHRQZx_u2abR07ZT8n_iQ&s",
              firstName: "John",
              lastName: "Doe",
              orderNo: 1234567,
              amount: "250.00",
              status: "Delivered"
            },
            {
              profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavJb-XUHDGBrQzxgG1Dr1D7a2zDR_sfr2Tg&s",
              firstName: "Emily",
              lastName: "Johnson",
              orderNo: 7654321,
              amount: "150.00",
              status: "Pending"
            },
            {
              profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4U1lGjzUQjaVoFOVMvfq5opZL3rPBsQnJQw&s",
              firstName: "Michael",
              lastName: "Smith",
              orderNo: 9876543,
              amount: "400.34",
              status: "Cancel"
            },
            {
              profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK1Mx6FdxqD2mFfFJCrw2eKdf4jYo5wQpl9g&s",
              firstName: "Sophia",
              lastName: "Davis",
              orderNo: 6543210,
              amount: "275.40",
              status: "Pending"
            },
            {
              profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Fq0OrpXLC1Zqi9A1GvXXO7Gg4v5HV7prDQ&s",
              firstName: "William",
              lastName: "Brown",
              orderNo: 2468101,
              amount: "320.00",
              status: "Delivered"
            }
          ]          
    }


    const status = ["Delivered", "Pending", "Cancel" ]

  return (
    <div className='bg-[#1F2029] rounded-md md:p-4 p-2'>
    <h2 className='text-lg md:text-2xl'>Recent Orders</h2>
    <div className='overflow-x-auto'>
        <table className='w-full text-start'>
            <thead>
                <tr className='border-b border-gray-700'>
                    {tableConfig.columnNames.map((item, index) => (
                        <th key={index} className='text-start py-4 px-2 whitespace-nowrap'>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableConfig.data.map((row, rowIndex) => (
                    <tr key={rowIndex} className='border-b border-gray-700'>
                        <td className='py-4 px-2 flex justify-start gap-2 items-center whitespace-nowrap min-w-[150px]'>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzgup07l-IhHq_3j2u1iEK9tJWGJGKInZWA&s"
                                className="w-8 h-8 rounded-full"
                                alt={`${row.firstName} ${row.lastName}`}
                            />
                            {row.firstName + " " + row.lastName}
                        </td>
                        <td className='py-4 px-2 whitespace-nowrap'>{row.orderNo}</td>
                        <td className='py-4 px-2 whitespace-nowrap'>${row.amount}</td>
                        <td className='py-4 px-2 whitespace-nowrap'><span className={`${row.status === "Delivered" ? "bg-green-500/40 text-green-500" : row.status === "Pending" ? "bg-amber-500/40 text-amber-500" : "bg-red-500/40 text-red-500" } p-2 py-1 rounded-2xl`}>{row.status}</span></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


  )
}

export default RecentTable

