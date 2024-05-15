import React from 'react'
import NavbarProfile from './NavbarProfile'
import SubMessageBox from './SubMessageBox'
import InputMessage from './InputMessage'


const MessageBox = () => {
  return (
    <div className='h-screen w-full flex flex-col '>

      <div className="flex-none">
        <NavbarProfile />
      </div>
      <div className="flex-grow">
        <SubMessageBox />
      </div>
      <div className="flex-none">
        <InputMessage />
      </div>
     
    </div>
  )
}

export default MessageBox
