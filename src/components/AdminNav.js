import React from 'react'

export default function AdminNav() {
  function logout(){
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className='navbar'>
      <div className="logo">FLASHCARD APP</div>
      <div className="menu1">
     <a href="#" onClick={()=>logout()}>Logout</a>
      </div>
    </div>
  )
}
