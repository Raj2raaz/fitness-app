import React from 'react'
import Header from './Header'
import BottomNavbar from './BottomNavbar'


function WorkoutTracker() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className='mt-16 flex justify-center text-2xl font-semibold'>Workout Tracker</div>
    
      <div>
<BottomNavbar/>
      </div>

    </div>
  )
}

export default WorkoutTracker
