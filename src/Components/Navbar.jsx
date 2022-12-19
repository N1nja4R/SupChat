import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Sup! Chat</span>
      <div className="user"> 
        <img src="https://cdn.discordapp.com/attachments/788076965399756842/1021381532193132594/logo-discord-digital-art-cat-ears-simple-background-hd-wallpaper-preview.jpg" alt=""/>
        <span>mykl</span>
        <button>logout</button>
      
      </div>
    </div>
  )
}

export default Navbar