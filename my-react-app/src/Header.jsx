function Header() {
    function showSideBar() {
        const sidebar = document.querySelector(".links");
        sidebar.style.display = "block";
        document.querySelector(".hamburger").style.display = "none";
    }

    function hideSideBar() {
        const sidebar = document.querySelector(".links");
        sidebar.style.display = "none";
        document.querySelector(".hamburger").style.display = "flex";
    }
    return (
        <header>
            <div className="header">
                <img src="/Media/logo.png" alt="logo" className="logo" />

                <nav>
                    <ul className="links">
                        <img
                            src="/Media/closeMenu.svg"
                            alt="close-menu"
                            id="close"
                            onClick={hideSideBar}
                            style={{ cursor: "pointer" }}
                        />
                        <li>
                            <a href="/index">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={showSideBar}>
                    <div className="menu"></div>
                    <div className="menu"></div>
                    <div className="menu"></div>
                </div>
            </div>
        </header>
    );
}
export default Header;
