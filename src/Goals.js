import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom';


function Goals() {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/workoutTracker");
    }
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className='mt-16 flex justify-center text-2xl font-semibold'>What are your goals?</div>

            <div className="mt-12 flex justify-center flex-col items-center space-y-4">

                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">Weight Loss</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />


                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">Muscle Gain</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />
                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">Flexibility and Mobility</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />
                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">General Fitness</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />
                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">Event - specific training</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />
                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">

                    <div className="w-full px-4 py-4 rounded-lg focus:outline-none bg-transparent text-sm font-semibold">Mindfulness and Mental Health</div>
                    <input id="link-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-200 border-blue-600 rounded focus:ring-blue-500 focus:ring-offset-gray-200 focus:ring-2 mr-3" />
                </div>

            </div>

            <div className="flex justify-center mt-14">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white  py-3 px-28 rounded-2xl" onClick={nextPage}>
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default Goals
