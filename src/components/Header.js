import logo from "../../public/ramen_logo.png"
import { Link } from "react-router-dom";


const Header = () => (
    <div className="header_wrap">
        <img src={logo} className="logoImg" />
        <ul className="nav_list">
            <li className="nav_item">
                <Link to='/'>Home</Link>
            </li>
            <li className="nav_item">
                <Link to='/about'>About</Link>
            </li>
            <li className="nav_item">
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </div>
)
export default Header;