import obj from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={obj.nav}>
            <div className={obj.item}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;