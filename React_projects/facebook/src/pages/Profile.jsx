import React, { useState } from 'react'

function Profile() {
  const [icon, setIcon] = useState(false)
  const clickHandler = ()=>{
    setIcon(!icon);
  }
  return (
    <div className='container'>
    {
          icon ? <i class="bi bi-hand-thumbs-up-fill" onClick={clickHandler}></i> : <i class="bi bi-hand-thumbs-up  " onClick={clickHandler}></i>
    }
    </div>
  )
}

export default Profile
