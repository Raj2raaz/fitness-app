import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function BottomNavbar() {
  return (
    <div className='fixed  bottom-0 left-0 w-full flex justify-around pb-4 pt-4 bg-white'>
      <HomeRoundedIcon style={{ fontSize: 32 }}/>
      <ImageRoundedIcon style={{ fontSize: 32 }}/>
      {/* <SearchRoundedIcon style={{ fontSize: 32, position: 'relative', bottom: '14px' }}/> */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
      <div className="rounded-full bg-gray-200 p-2">
        <SearchRoundedIcon style={{ fontSize: 32 }}/>
      </div>
    </div> */}
     <SearchRoundedIcon style={{ fontSize:32}}/>
      <CameraAltRoundedIcon style={{ fontSize: 32 }}/>
      <PersonOutlineIcon style={{ fontSize: 32 }}/>
    </div>
  )
}

export default BottomNavbar
