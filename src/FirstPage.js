import React from 'react'
import Header from './Header'
import running from "./assets/running.jpg"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function FirstPage() {
  return (
    <div>
      <div>
        <Header/>
      </div>

      <div className='flex justify-end mt-10 pr-6 text-black'>
        <a href="/">Skip</a>  
      </div>
      
      <div className='container'>
        <img src={running} alt="cycling" className='w-full h-80' />
      </div>

      <div className='text-black container px-6 py-8'>
        <div>Track Your Goal</div>
        <div>Don't worry if you have trouble determining your goals, we can help you determine your goals and track your goals</div>
      </div>

      <div className='flex justify-end pr-14'>
      <ArrowForwardIosIcon/>
      </div>
    </div>
  )
}

export default FirstPage
