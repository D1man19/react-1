import obj from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={obj.nav}>
            <div>
                <div>
                    <NavLink to="/profile" className = { navData => navData.isActive ? obj.active : obj.item }>Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? obj.active : obj.item }>Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/feed" className = { navData => navData.isActive ? obj.active : obj.item }>News</NavLink>
                </div>
                <div>
                    <NavLink to="/music" className = { navData => navData.isActive ? obj.active : obj.item }>Music</NavLink>
                </div>
                <div>
                    <NavLink to="/settings" className = { navData => navData.isActive ? obj.active : obj.item }>Settings</NavLink>
                </div>
                <div className={obj.circle}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;