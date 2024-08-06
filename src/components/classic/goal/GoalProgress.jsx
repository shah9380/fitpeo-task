import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GoalProgress = ({ percentage }) => {
  return (
    <div className="flex flex-col items-center">
      <div className='w-20 relative'>
        <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
            pathColor: '#4a90e2',
            textColor: '#ffffff',
            trailColor: '#2c3e50',
            textSize: '16px',
            })}
        />
        <p className="m-0 bottom-3 left-[20px] text-[8px] text-center absolute text-white/55">Goal <br /> Completed</p>
      </div>
      <div className="text-center text-white/55 mt-2">
        <small className='text-[8px]' style={{lineHeight: 1.5}}>*The values here have been rounded off.</small>
      </div>
    </div>
  );
};

export default GoalProgress;
