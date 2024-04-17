import React from 'react'
import Header from './Header'
import BottomNavbar from './BottomNavbar'
import Chart from './Chart'
import WarningAmberRoundedIcon from '@mui/icons-material/WarningAmberRounded';
import running from "./assets/running.jpg"


function WorkoutTracker() {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="mb-20">
                <div className='mt-12 flex justify-center text-2xl font-semibold'>Workout Tracker</div>

                <div>
                    <Chart />
                </div>

                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center ml-6 ">

                    <div className='ml-4'>
                        <WarningAmberRoundedIcon />
                    </div>

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">You have worked fewer calories than  yesterday. Time to get moving</div>
                </div>


                <div className='p-4 flex justify-between items-center'>
                    <div className='text-lg font-semibold'>Upcoming Workout</div>
                    <div> See more</div>
                </div>

                <div className=' flex justify-between items-center bg-white rounded-lg shadow-md px-2 pb-4'>
                    <div className='flex items-center'>
                        <div>
                            <img src={running} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div>
                            <div>Full body  workout </div>
                            <div>Today 3 pm</div>
                        </div>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer mr-4">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
                <div className=' flex justify-between items-center bg-white rounded-lg shadow-md px-2 pb-4'>
                    <div className='flex items-center'>
                        <div>
                            <img src={running} alt="" className="w-16 h-16 rounded-full" />
                        </div>
                        <div>
                            <div>Upper body  workout </div>
                            <div>4 Feb, 3:30 pm</div>
                        </div>
                    </div>
                    <div>
                        <label class="inline-flex items-center cursor-pointer mr-4">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>

            </div>

            <div>
                <BottomNavbar />
            </div>

        </div>
    )
}

export default WorkoutTracker
