function MenuNavigator() {
    return (
        <nav className="menu">

            <div className="menu__header">
                <div className="menu__header-logo">
                    <img src="" alt="" />
                </div>
                <div className="menu__header-title">
                    <h1>Dashboard</h1>
                </div>
                <div className="menu__header-subtitle">
                    v.01
                </div>
            </div>

            <ul className="menu__list">
                <li className="menu__list-item">Dashboard</li>
                <li className="menu__list-item">Product <span className="arrow-right"></span></li>
                <li className="menu__list-item">Customers <span className="arrow-right"></span></li>
                <li className="menu__list-item">Income <span className="arrow-right"></span></li>
                <li className="menu__list-item">Promote <span className="arrow-right"></span></li>
                <li className="menu__list-item">Help <span className="arrow-right"></span></li>
            </ul>

            <div className="menu__promo">
                <h2 className="menu__promo-title">Upgrade to  PRO to get access all Features!</h2>
                <button className="menu__promo-button">Get Pro Now!</button>
            </div>

            <div className="menu__profile">
                <div className="menu__profile-photo"></div>
                <div className="menu_profile-text">
                    <h3 className="menu__profile-name"></h3>
                    <p className="menu__profile-special"></p>
                </div>
                <span className="arrow-down"></span>
            </div>
        </nav>
    )
}

export default MenuNavigator