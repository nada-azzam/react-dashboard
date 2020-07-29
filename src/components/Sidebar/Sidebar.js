import React, { useState } from 'react';
// import boot from '../../../plugins/index'
import logo from '../../assets/img/reactlogo.png'

const Sidebar = ({ }) => {

    return (
        <>
            <div id="sidebar" className="sidebar"><div className="sidebar-background" ></div>
                <div className="logo"><a href="https://www.creative-tim.com?ref=lbd-sidebar" className="simple-text logo-mini">
                    <div className="logo-img"><img src={logo} alt="Something" /></div>
                </a><a href="https://www.creative-tim.com?ref=lbd-sidebar" className="simple-text logo-normal">Creative Tim</a></div>
                <div className="sidebar-wrapper"><ul className="nav"><li className="active"><a className="nav-link active" href="#/admin/dashboard" aria-current="page">
                    <i className="pe-7s-graph"></i><p>Dashboard</p></a></li><li className=""><a className="nav-link" href="#/admin/user"><i className="pe-7s-user">
                    </i><p>User Profile</p></a></li><li className=""><a className="nav-link" href="#/admin/table"><i className="pe-7s-note2"></i><p>Table List</p>
                    </a></li><li className=""><a className="nav-link" href="#/admin/typography"><i className="pe-7s-news-paper"></i><p>Typography</p></a></li>
                    <li className=""><a className="nav-link" href="#/admin/icons"><i className="pe-7s-science"></i><p>Icons</p></a></li>
                    <li className=""><a className="nav-link" href="#/admin/maps"><i className="pe-7s-map-marker"></i><p>Maps</p></a></li>
                    <li className=""><a className="nav-link" href="#/admin/notifications"><i className="pe-7s-bell"></i><p>Notifications</p></a></li>
                    <li className="active active-pro"><a className="nav-link" href="#/admin/upgrade">
                        <i className="pe-7s-rocket"></i><p>Upgrade to PRO</p></a></li></ul></div></div>
        </>
    );
};

export default Sidebar;
