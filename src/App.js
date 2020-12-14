import React from "react";
import "./App.css";
//import "fontsource-roboto";
import Menu from "./components/Navbar/Menu/Menu";
import Account from "./components/Navbar/Account/Account";

import { routesConfig as Routes } from "./routesConfig";

export default function App() {
  return (
    <div className="App">
      <nav>
          <Account />
        </nav>
        <div className="menu-pagina">
          <nav>
            <Menu />
          </nav>
          <div className="container">
            <Routes />
          </div>
        </div>
    </div>
  );
}
