import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import AdminNavbar from './components/Navbars/AdminNavbar';

import routes from './routes';
import { Route, Switch, useLocation } from 'react-router-dom';





const App = () => {
  let location = useLocation();
  useEffect(() => {
    setActiveRoute({ location: location.pathname })
  }, [])

  const [activeRoute, setActiveRoute] = useState({
    location: '/home'
  })
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          render={() => (
            <prop.component
              {...prop}
            />
          )}
          key={key}
        />
      );

    });
  };
  const getBrandText = ( routes ,currectRoute) => {
    for (let i = 0; i < routes.length; i++) {
      if( routes.find(el =>  el.path == currectRoute)) {
        return routes.find(el =>  el.path == currectRoute).name
      }
    }
  }
  return (
    <div className="wrapper">
      <Sidebar />
      <div id="main-panel" className="main-panel" >
        <AdminNavbar  brandText={getBrandText(routes,activeRoute.location)} />
        <Switch>{getRoutes(routes)}</Switch>
      </div>
    </div>)
};

export default App;
