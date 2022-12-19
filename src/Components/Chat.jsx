import React from 'react'
import Add from "../img/add.png";
import Cam from "../img/cam.png";
import More from "../img/more.png";
import Messages from './Messages'
import Input from './Input'

const chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>rageburn</span>
        <div className="chaticons">
          <img src={Add} alt="" />
          <img src={Cam} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default chat