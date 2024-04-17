import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function BottomNavbar() {
  return (
    <div className='absolute bottom-0 left-0 w-full flex justify-around py-4'>
      <HomeRoundedIcon/>
      <ImageRoundedIcon/>
      <SearchRoundedIcon/>
      <CameraAltRoundedIcon/>
      <PersonOutlineIcon/>
    </div>
  )
}

export default BottomNavbar
