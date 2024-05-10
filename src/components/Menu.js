import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./Menu.css"
function Menu() {
  return (
    
       <div className='mContainer'>
        <div className='leftContainer'>
        <Link to="lipstick">Lipstick</Link>
        <Link to="Foundation">Foundation</Link>
        <Link to="blusher">Blusher</Link>
        <Link to="perfume">Perfume</Link>
        
        </div>
        <div className='rightContainer'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Menu
