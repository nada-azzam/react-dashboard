import React from 'react';
import boot from '../../plugins/index'
const AdminNavbar = (props) => {
    return (
      <>
   <boot.Navbar fluid="true"  className="navbar navbar-default">
      <boot.Navbar.Brand>
        {/* <a href="#pablo">{this.props.brandText}</a> */}
      </boot.Navbar.Brand>
      <boot.Navbar.Toggle />
    <boot.Navbar.Collapse>
      {/* <AdminNavbarLinks onClick={this.mobileSidebarToggle} /> */}
      {props.brandText}
    </boot.Navbar.Collapse>
  </boot.Navbar>
  </>
    );
  };

  export default AdminNavbar;