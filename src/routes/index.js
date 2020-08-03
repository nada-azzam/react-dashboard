
import TableList from "../views/TableList";
import Home from "../views/Home";

const routes = [
  {
    path: "/home",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  }
]
export default routes;
