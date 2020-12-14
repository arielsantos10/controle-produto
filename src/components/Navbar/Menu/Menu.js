import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import Box from "@material-ui/core/Box";

//array do link com as rotas
const links = [
  { route: "/produtos", label: "Produtos", icon: <ShoppingBasketIcon /> },
  { route: "/categorias", label: "Categorias", icon: <ListAltIcon /> }
];

export class Menu extends Component {
  renderLink = () => {
    //map percorre os links - o componente "to" indica a rota
    //key para indicar que o elemento é unico
    return links.map((link) => (
      <NavLink
        activeClassName="selected"
        key={link.route}
        className="menu-link"
        to={link.route}
      >
        <Box alignSelf="center" color="#b087ee" mr="5px" mt="4px">
          {link.icon}
        </Box>
        {link.label}
      </NavLink>
    ));
  };

  render() {
    return (
      //renderizando os links
      <div className="nav-menu">
        <div className="logo-titulo">
          <span>Produto Co.</span>
        </div>
        <ul>{this.renderLink()}</ul>
      </div>
    );
  }
}

export default Menu;
