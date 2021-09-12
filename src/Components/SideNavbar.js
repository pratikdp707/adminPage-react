import React from 'react'
import './App.css'
import rocket from './undraw_rocket.svg'

export default function SideNavbar() {

    const interfaceObj = [{

        header: "Components",
        fontawesome: "fas fa-fw fa-cog",
        list: ["Buttons", "Cards"]
    },
    {
        header: "Utilities",
        fontawesome: "fas fa-fw fa-wrench",
        list: ["Colors", "Borders", "Animations", "Other"]
    }

    ]

    const addonObj = [
        {
            header: "Pages",
            fontawesome: "fas fa-fw fa-folder",
        },
        {
            header: "Charts",
            fontawesome: "fas fa-fw fa-chart-area"
        }, {
            header: "Tables",
            fontawesome: "fas fa-fw fa-table"
        }
    ]


    return (
        <div id="wrapper">
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>


                {/* //Collapse Menu */}
                {
                    interfaceObj.map((element) => {
                        return (
                            <li className="nav-item">
                                <a className="nav-link collapsed" href="/" data-toggle="collapse" data-target={`#collapse${element.header}`}
                                    aria-expanded="true" aria-controls={`collapse${element.header}`}>
                                    <i className={element.fontawesome}></i>
                                    <span>{element.header}</span>
                                </a>
                                <div id={`collapse${element.header}`} className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                    <div className="bg-white py-2 collapse-inner rounded">
                                        <h6 className="collapse-header">Custom {element.header}:</h6>

                                        {
                                            element.list.map((listItem) => {
                                                return (
                                                    <a className="collapse-item" href="/">{listItem}</a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </li>
                        )
                    })
                }

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Addons
                </div>

                {/* Addon Menu */}

                {
                    addonObj.map((addon) => {
                        return (
                            <li className="nav-item">
                                <a className="nav-link" href="charts.html">
                                    <i className={addon.fontawesome}></i>
                                    <span>{addon.header}</span></a>
                            </li>
                        )
                    })
                }

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

                {/* <!-- Sidebar Message --> */}
                <div className="sidebar-card d-none d-lg-flex">
                    <img className="sidebar-card-illustration mb-2" src={rocket} alt="..." />
                    <p className="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
                    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
                </div>

            </ul>
        </div>
    )
}
