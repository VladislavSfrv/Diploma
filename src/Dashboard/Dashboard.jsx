import { useState } from "react"

function Dashboard() {
    //  состояния для кнопок активного и неактивного клиента
    const textActiveButton = { active: "Active", inactive: "Inactive" }
    const [activeButton1, setActiveButton1] = useState(localStorage.getItem("activeButton1") != null ? JSON.parse(localStorage.getItem("activeButton1")) : true)
    const [activeButton2, setActiveButton2] = useState(localStorage.getItem("activeButton2") != null ? JSON.parse(localStorage.getItem("activeButton2")) : true)
    const [activeButton3, setActiveButton3] = useState(localStorage.getItem("activeButton3") != null ? JSON.parse(localStorage.getItem("activeButton3")) : true)
    const [activeButton4, setActiveButton4] = useState(localStorage.getItem("activeButton4") != null ? JSON.parse(localStorage.getItem("activeButton4")) : true)
    const [activeButton5, setActiveButton5] = useState(localStorage.getItem("activeButton5") != null ? JSON.parse(localStorage.getItem("activeButton5")) : true)
    const [activeButton6, setActiveButton6] = useState(localStorage.getItem("activeButton6") != null ? JSON.parse(localStorage.getItem("activeButton6")) : true)

    // переключение состояния кнопки и добавление в локальное хранилище браузера
    const handleActiveButton = (button, setButton, buttonId) => {
        setButton(!button)
        localStorage.setItem(`activeButton${buttonId}`, JSON.stringify(!button))
    }

    return (
        <main className="dashboard">
            <div className="dashboard__header">
                <h1 className="dashboard__header-title">Hello Evano!</h1>
                <div className="dashboard__header-group">
                    <svg className="dashboard__header-group__icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                    <input placeholder="Search" type="search" className="dashboard__header-group__input" />
                </div>
            </div>

            <section className="active">
                <div className="active__item">
                    <div className="active__item-img">
                        <img src="/src/assets/icons/group.svg" alt="avatar" />
                    </div>
                    <div className="active__item-content">
                        <h3 className="active__item-content-title">Total Customers</h3>
                        <p className="active__item-content-number">5,423</p>
                        <div className="active__item-content-statistics">
                            <img src="/src/assets/icons/green-arrow-up.svg" alt="" />
                            <p className="active__item-content-statistics__text"><span className="statistics__up">16%</span> this month</p>
                        </div>
                    </div>
                </div>

                <div className="active__item">
                    <div className="active__item-img">
                        <img src="/src/assets/icons/group-succes.svg" alt="avatar" />
                    </div>
                    <div className="active__item-content">
                        <h3 className="active__item-content-title">Members</h3>
                        <p className="active__item-content-number">1,893</p>
                        <div className="active__item-content-statistics">
                            <img src="/src/assets/icons/red-arrow-down.svg" alt="" />
                            <p className="active__item-content-statistics__text"><span className="statistics__down">1%</span> this month</p>
                        </div>
                    </div>
                </div>

                <div className="active__item">
                    <div className="active__item-img">
                        <img src="/src/assets/icons/computer.svg" alt="avatar" />
                    </div>
                    <div className="active__item-content">
                        <h3 className="active__item-content-title">Active Now</h3>
                        <p className="active__item-content-number">189</p>
                        <div className="active__item-content-members">
                            <img src="/" alt="" />
                            <img src="/" alt="" />
                            <img src="/" alt="" />
                            <img src="/" alt="" />
                            <img src="/" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="customers">
                <div className="customers__header">
                    <div className="customers__header-text">
                        <h2 className="customers__header-text-title">All Customers</h2>
                        <p className="customers__header-text-subtitle">Active Members</p>
                    </div>
                    <div className="dashboard__header-group">
                        <svg className="dashboard__header-group__icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="dashboard__header-group__input" />
                    </div>
                    <div className="dashboard__header-group">
                        <svg className="dashboard__header-group__icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input placeholder="Search" type="search" className="dashboard__header-group__input" />
                    </div>
                </div>

                <div className="customers__categories">
                    <div className="customers__categories-item">
                        <p>Customer Name</p>
                    </div>
                    <div className="customers__categories-item">
                        <p>Company</p>
                    </div>
                    <div className="customers__categories-item">
                        <p>Phone Number</p>
                    </div>
                    <div className="customers__categories-item">
                        <p>Email</p>
                    </div>
                    <div className="customers__categories-item">
                        <p>Country</p>
                    </div>
                    <div className="customers__categories-item">
                        <p>Status</p>
                    </div>
                </div>

                <div className="customers__data">
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Jane Cooper</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Microsoft</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(225) 555-0118</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>jane@microsoft.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>United States</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton1, setActiveButton1, 1)}
                                    className={`customers__data-info-item-button ${activeButton1 ? "button__active" : "button__inactive"}`}>{activeButton1 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Floyd Miles</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Yahoo</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(205) 555-0100</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>floyd@yahoo.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Kiribati</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton2, setActiveButton2, 2)}
                                    className={`customers__data-info-item-button ${activeButton2 ? "button__active" : "button__inactive"}`}>{activeButton2 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Ronald Richards</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Adobe</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(302) 555-0107</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>ronald@adobe.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Israel</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton3, setActiveButton3, 3)}
                                    className={`customers__data-info-item-button ${activeButton3 ? "button__active" : "button__inactive"}`}>{activeButton3 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Marvin McKinney</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Tesla</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(252) 555-0126</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>marvin@tesla.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Iran</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton4, setActiveButton4, 4)}
                                    className={`customers__data-info-item-button ${activeButton4 ? "button__active" : "button__inactive"}`}>{activeButton4 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Jerome Bell</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Google</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(629) 555-0129</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>jerome@google.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Réunion</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton5, setActiveButton5, 5)}
                                    className={`customers__data-info-item-button ${activeButton5 ? "button__active" : "button__inactive"}`}>{activeButton5 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>Kathryn Murphy</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Microsoft</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>(406) 555-0120</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>kathryn@microsoft.com</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>Curaçao</p>
                        </div>
                        <div className="customers__data-info-item">
                            {
                                <button
                                    onClick={() => handleActiveButton(activeButton6, setActiveButton6, 6)}
                                    className={`customers__data-info-item-button ${activeButton6 ? "button__active" : "button__inactive"}`}>{activeButton6 ? textActiveButton.active : textActiveButton.inactive}
                                </button>
                            }
                        </div>
                    </div>
                </div>

                <footer className="customers__footer">
                    <p>Showing Data</p>
                </footer>
            </section>
        </main>
    )
}

export default Dashboard