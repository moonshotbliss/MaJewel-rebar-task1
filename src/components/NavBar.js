import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
export default function NavBar(){
 
    return(
        <nav className="navbar">
          
            <input type="checkbox" name="" id="check" />
            <h1 className="navbar__logo">SOFTGRAY</h1>
            
            <label htmlFor="check">
                
                <i className="navbar__btn">
                <Icon icon={menu} size={40}/>
                </i>
            </label>

            <div className="navbar__menu">

                <label htmlFor="check">
                <i className="navbar__btn--close">
                    <Icon icon={x} size={40}/>
                </i>
                </label>
             
                <ul className="menu--list">
                    <li><a>PRODUCTS</a></li>
                    <li><a>SERVICES</a></li> 
                    <li><a>ABOUT</a></li>
                    <li><a>JOBS</a></li>
                    <li><a>CONTACT</a></li>
                    <li><a className="menu--list--style">+81-00-0000-0000</a></li>
                </ul>
            </div>
        </nav>

        


    )
}