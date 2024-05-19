import { useContext } from "react";
import logo from "../../public/ramen_logo.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header = () => {
    const {name} = useContext(UserContext);
    return (
        <div className="flex flex-row justify-between items-center border-b">
            <img src={logo} className="h-28" />
            <ul className="flex gap-3 mr-32">
                <li className="hover:text-blue-600">
                    <Link to='/'>Home</Link>
                </li>
                <li className="hover:text-blue-600">
                    <Link to='/about'>About</Link>
                </li>
                <li className="hover:text-blue-600">
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className="font-bold">{name}</li>
            </ul>
        </div>
    )
};
export default Header;