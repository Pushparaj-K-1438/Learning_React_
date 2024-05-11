import logo from "../../public/ramen_logo.png"


const Header = () => (
    <div className="header_wrap">
        <img src={logo} className="logoImg" />
        <ul className="nav_list">
            <li className="nav_item">Home</li>
            <li className="nav_item">About</li>
            <li className="nav_item">Cart</li>
        </ul>
    </div>
)
export default Header;