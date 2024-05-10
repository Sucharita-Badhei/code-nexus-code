import React from 'react'
import "./Nav.css"
function Nav() {
  return (
    <div className='maincontainer'>
        <div className='leftcontainer'>
         <h2>Glam Beauty</h2>
        </div>
        <div className='rightcontainer'>
        <a href="\home">Home</a>
        <a href="\contact">Contact</a>
        <a href="\menu">Menu</a>
        <a href="\search">Search</a>
        <a href="\profile">Profile</a>
        <a href="\addtocart">AddtoCart</a>
        </div>
      
    </div>
  )
}

export default Nav
