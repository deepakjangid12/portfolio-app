import React, { useState } from 'react'
import Home from '../../pages/Home/Home'
import Menu from '../Menu/Menu';
import "./Layout.css";
import {AiOutlineDoubleLeft ,AiOutlineDoubleRight} from 'react-icons/ai'
function Layout() {
    const [toggle, settoggle] = useState(true)
    //change toggle
    const handleToggle =()=>{
        settoggle(!toggle)
    }
  return (
    <>
     <div className="sidebar-section">
        <div className="sidebar-toggle">
            {/* <div className="sidebar-toggle-icons">
                passing toggle as props
                <p onClick={handleToggle}>
                    {
                        toggle?(<AiOutlineDoubleLeft size={30}/>):(<AiOutlineDoubleRight size={30}/>)
                    }
                </p>
            </div> */}
            <Menu  toggle={toggle}/>
        </div>
        <div >
        <Home/>
        </div>
     </div>
    </>
  )
}

export default Layout
