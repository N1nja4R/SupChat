import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchform">
        <input type="text" placeholder='Find or start a conversation' />
      </div>
      <div className="userchat">
        <img src='https://cdn.discordapp.com/attachments/788076965399756842/1021381024787202120/unknown.png' alt=''/>
         <div className="userchatinfo">
          <span>rageburn</span>
         </div>
       </div>
    </div>
  )
}

export default Search