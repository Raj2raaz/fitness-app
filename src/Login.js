import React from 'react'
import Header from './Header'
import google from "./assets/google.svg"
import facebook from "./assets/facebook.svg"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/goals");
    }
    return (
        <div>
            <div>
                <Header />
            </div>

            <div className='mt-16 pl-8  text-2xl font-bold'>Welcome Back</div>

            <div className="mt-8 flex justify-center flex-col items-center space-y-5">
                
                <div className="w-80 bg-gray-200 rounded-2xl">
                    <input type="text" placeholder="Email" className="w-full px-4 py-3 rounded-lg focus:outline-none bg-transparent text-sm" />
                </div>
                <div className="w-80 bg-gray-200 rounded-2xl flex justify-between items-center">
                    <input type="password" placeholder="Password" className="w-full px-4 py-3 rounded-lg focus:outline-none bg-transparent text-sm" />
                    <VisibilityOffIcon className="mr-3 pr-1"/>
                </div>
            </div>


            <div className='px-8 mt-4  text-sm '>
                <a href="">Forgot your password?</a>
            </div>

            <div className='absolute bottom-0 left-0 w-full'>
                <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white  py-3 px-20 rounded-2xl" onClick={nextPage}>
                        Sign In
                    </button>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <hr className="w-1/3 border-gray-300 border-t-2 mr-4" />
                    <div className="text-gray-500">or</div>
                    <hr className="w-1/3 border-gray-300 border-t-2 ml-4" />
                </div>

                <div className="flex items-center justify-center mt-2">

                    <div className="rounded-lg overflow-hidden border border-black mr-4 p-2 flex justify-center items-center" style={{ width: '40px', height: '40px' }}>
                        <img src={google} alt="Google" className="h-4 w-4 object-cover" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-black mr-4 p-2 flex justify-center items-center" style={{ width: '40px', height: '40px' }}>
                        <img src={facebook} alt="Facebook" className="h-4 w-4 object-cover" />
                    </div>
                </div>

                <div className='flex justify-center mt-3 mb-6 text-sm'>Don't have an account yet? <a href="/signup"> Create an account</a></div>

            </div>

        </div >
    )
}

export default Login
