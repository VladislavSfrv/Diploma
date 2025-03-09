function MenuNavigator() {
    return (
        <nav className="menu">

            <div className="menu__header">
                <div className="menu__header-logo">
                    <img width={37} height={37} src="/src/assets/icons/logo.svg" alt="logo" />
                </div>
                <div className="menu__header-title">
                    <h1>Dashboard</h1>
                </div>
                <div className="menu__header-subtitle">
                    v.01
                </div>
            </div>

            <ul className="menu__list">
                <li className="menu__list-item"><img src="/src/assets/icons/key-square.svg" alt="key" /> <span className="menu__list-item__text">Dashboard</span></li>
                <li className="menu__list-item"><img src="/src/assets/icons/d-square.svg" alt="" /> <span className="menu__list-item__text">Product</span> <span className="arrow-right">{`>`}</span></li>
                <li className="menu__list-item"><img src="/src/assets/icons/user-square.svg" alt="" /> <span className="menu__list-item__text">Customers</span> <span className="arrow-right">{`>`}</span></li>
                <li className="menu__list-item menu__list-item-active"><img src="/src/assets/icons/wallet-square.svg" alt="" /> <span className="menu__list-item__text">Income</span> <span className="arrow-right">{`>`}</span></li>
                <li className="menu__list-item"><img src="/src/assets/icons/discount-square.svg" alt="" /> <span className="menu__list-item__text">Promote</span> <span className="arrow-right">{`>`}</span></li>
                <li className="menu__list-item"><img src="/src/assets/icons/help-square.svg" alt="" /> <span className="menu__list-item__text">Help</span> <span className="arrow-right">{`>`}</span></li>
            </ul>

            <div className="menu__promo">
                <h2 className="menu__promo-title">Upgrade to  PRO to get access all Features!</h2>
                <button className="menu__promo-button">Get Pro Now!</button>
            </div>

            <div className="menu__profile">
                <img src="/src/assets/icons/avatar.svg" alt="avatar" />
                <span className="menu__profile-text">
                    <h3 className="menu__profile-text__name">Evano</h3>
                    <p className="menu__profile-text__special">Project Manager</p>
                </span>
                <span className="menu__profile-arrow-down"><img src="/src/assets/icons/arrow-down.svg" alt="arrow down" /></span>
            </div>
        </nav>
    )
}

export default MenuNavigator