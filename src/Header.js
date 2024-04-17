import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';

function Header() {
  return (
    <div className='fixed top-0 left-0 w-full z-10 bg-white p-2 flex justify-between '>
      <div className="pl-4">
        9:41
      </div>
      <div className="pr-2 flex items-center">
        <SignalCellularAltIcon className='pr-1'/>
        <WifiIcon className='pr-1' />
        <Battery6BarIcon className='rotate-90'/>
      </div>
    </div>
  )
}

export default Header
