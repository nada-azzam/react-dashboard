import React from 'react';
import Home from './pages/HomePage/Home';
import Sidebar from './components/Sidebar/Sidebar';
import AdminNavbar from './components/Navbars/AdminNavbar';




const App = () => (
  <div className="wrapper">
    <Sidebar/>
    <div id="main-panel" className="main-panel" >
          <AdminNavbar/>
          {/*  {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)} */}
          {/* <Switch>{this.getRoutes(routes)}</Switch> */}
          {/* <Footer /> */}
    <Home/>


    </div>

  </div>
);

export default App;
