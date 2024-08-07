import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Sample data
const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 9000 },
  { name: '11', uv: 4700 },
  { name: '13', uv: 4080 },
  { name: '15', uv: 5890 },
  { name: '17', uv: 5390 },
  { name: '19', uv: 7550 },
  { name: '21', uv: 9000 },
  { name: '23', uv: 5700 },
  { name: '25', uv: 2000 },
  { name: '27', uv: 12780 },
  { name: '30', uv: 15800 },
  { name: '32', uv: 10890 },
  { name: '34', uv: 9390 },
  { name: '36', uv: 5490 },
  { name: '37', uv: 4000 },
  { name: '40', uv: 11000 },
  { name: '50', uv: 8500 },
  { name: '52', uv: 6080 },
];

const BarChartComponent = () => {
  return (
    <div className="bg-[#1F2029] rounded-md md:p-4 flex flex-col gap-4">
      <div className='flex justify-between items-center p-4'>
        <h2>Activity</h2>
        <div className='bg-gray-600 outline-none border-none rounded-xl px-2 py-1'>
            <select name="" id="" className='bg-gray-600 outline-none border-none rounded-xl'>
              <option value="weekly">Weekly</option>
            </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={215}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis dataKey="name" tickMargin={10} axisLine={false} />
          <YAxis tickMargin={20} axisLine={false} />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="uv" fill="#7394FF" radius={[30, 30, 30, 30]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;