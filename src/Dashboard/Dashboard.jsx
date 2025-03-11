function Dashboard() {
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
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__active">Active</button>
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__inactive">Inactive</button>
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__active">Active</button>
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__active">Active</button>
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__active">Active</button>
                        </div>
                    </div>
                    <div className="customers__data-info">
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <p>user</p>
                        </div>
                        <div className="customers__data-info-item">
                            <button className="customers__data-info-item-button button__active">Active</button>
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