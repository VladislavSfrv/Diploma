import { useState } from "react";
import { Link } from 'react-router-dom';


function MenuNavigator() {
    const squareImageUrl = ["/src/assets/icons/key-square.svg",
        "/src/assets/icons/d-square.svg",
        "/src/assets/icons/user-square.svg",
        "/src/assets/icons/wallet-square.svg",
        "/src/assets/icons/discount-square.svg",
        "/src/assets/icons/help-square.svg"
    ]

    const [activeItem, setActiveItem] = useState(0)

    const handleClick = (index) =>{
        setActiveItem(index)
    }

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
                {["Dashboard", "Product", "Customers", "Income", "Promote", "Help"].map((item, index) => (
                    <Link to={index === 0 ? "/" : `/${index}`}>
                        <li
                            key={index}
                            className={`menu__list-item ${activeItem === index ? "menu__list-item-active" : ""}`}
                            onClick={() => handleClick(index)}>
                            <img src={squareImageUrl[index]} alt="" /> 
                            <span className="menu__list-item__text">{item}</span>
                        </li>
                    </Link>
                ))}
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