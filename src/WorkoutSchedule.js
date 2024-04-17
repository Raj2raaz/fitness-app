import React from 'react'
import Header from './Header'
import BottomNavbar from './BottomNavbar'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function WorkoutSchedule() {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='mt-12 flex justify-center text-2xl font-semibold'>Workout Schedule</div>
      <div className='mt-4 flex justify-center text-lg font-semibold items-center'><ArrowLeftIcon/> Feb 2024 <ArrowRightIcon/></div>
      <div className='flex justify-around mt-4'> 
        <div>week days</div>
        <div> Date 6</div>
      </div>

      <div className='p-4'>
        Time
      </div>

      <div>
        <BottomNavbar/>
      </div>
    </div>
  )
}

export default WorkoutSchedule
