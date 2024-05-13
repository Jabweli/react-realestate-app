import React, {useState} from 'react'
import {logo} from "../../assets"
import "./header.css";
import {BiMenuAltRight} from "react-icons/bi";
import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler';


const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened)=> {
        if(document.documentElement.clientWidth <= 992) {
            return {right: !menuOpened && "-100%"}
        }
    }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>

            <img src={logo} alt="logo" width={100}/>

            <OutsideClickHandler
            onOutsideClick={()=> {
                setMenuOpened(false)
            }}
            >
                <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                    <a href="#residencies"  onClick={()=> setMenuOpened((prev)=>!prev)}>Residencies</a>
                    <a href="#value" onClick={()=> setMenuOpened((prev)=>!prev)}>Our value</a>
                    <a href="#contact" onClick={()=> setMenuOpened((prev)=>!prev)}>Contact Us</a>
                    <a href="#get-started" onClick={()=> setMenuOpened((prev)=>!prev)}>Get Started</a>

                    <button className='button'>
                        <a href="#">Contact</a>
                    </button>
                </div>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30} />
            </div>
        </div>

        
    </section>
  )
}

export default Header