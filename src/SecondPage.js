import React from 'react'
import Header from './Header'
import cycling from "./assets/cycling.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';


function SecondPage() {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/signup");
  }
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className='flex justify-end mt-10 pr-6 text-black'>
        <a href="/signup" class="text-blue-600 dark:text-blue-500 hover:underline">Skip</a>
      </div>

      <div className='container mt-8 mb-8'>
        <img src={cycling} alt="cycling" className='w-full h-auto' />
      </div>

      <div className='text-black container px-6 py-8'>
        <div>Get Burn</div>
        <div>Let's keep burning to achieve your goals, its hurts only temporarily, if you give up now you will be in pain forever</div>
      </div>

      <div className='flex justify-end p-10 absolute bottom-0 left-0 w-full'>
        <ArrowForwardIosIcon onClick={nextPage} />
      </div>
    </div>
  )
}

export default SecondPage
