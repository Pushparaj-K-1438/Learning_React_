import logo from "../../public/ramen_logo.png"
import { Link } from "react-router-dom";


const Header = () => (
    <div className="flex flex-row justify-between items-center border-b">
        <img src={logo} className="h-28" />
        <ul className="flex gap-3 mr-32">
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