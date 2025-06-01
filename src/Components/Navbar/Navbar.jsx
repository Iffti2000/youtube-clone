import React, { useRef, useState, useContext } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import moon_icon from '../../assets/Moon.svg'
import sun_icon from '../../assets/Sun.svg'
import { Link, useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../Context/DarkModeContext'


const Navbar = ({setSidebar}) => {
 const inputRef = useRef(null);
   const { darkMode, setDarkMode } = useContext(DarkModeContext);
 const navigate = useNavigate();

 const handleSearch = () => {
   const keyword = inputRef.current?.value;
   if(keyword){
     navigate(`/search/${keyword}`)
   }
 }

  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
       <Link to='/'><img className='logo' src={logo} alt="" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <img src={search_icon} alt="Search" onClick={handleSearch} />
       </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <i
          className="fa-solid fa-circle-half-stroke"
          onClick={() => setDarkMode(!darkMode)}
        ></i>
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className='user-icon' alt="" />
      </div>
    </nav>
  )
}

export default Navbar;

 

