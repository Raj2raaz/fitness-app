import React from 'react'
import Header from './Header'
import running from "./assets/running.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SecondPage from './SecondPage';
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();
  const nextPage= () => {
    navigate("/secondPage");
  }
  return (
    <div>
      <div>
        <Header/>
      </div>

      <div className='flex justify-end mt-10 pr-6 text-black'>
      <a href="/secondPage" class="text-blue-600 dark:text-blue-500 hover:underline">Skip</a>  
      </div>
      
      <div className='container'>
        <img src={running} alt="cycling" className='w-full h-80' />
      </div>

      <div className='text-black container px-6 py-8'>
      <div className='text-2xl font-semibold mb-4'>Track your goal</div>
        <div>Don't worry if you have trouble determining your goals, we can help you determine your goals and track your goals</div>
      </div>

      <div className='flex justify-end p-10 absolute bottom-0 left-0 w-full'>
      <ArrowForwardIosIcon onClick={nextPage}/>
      </div>
    </div>
  )
}

export default FirstPage
