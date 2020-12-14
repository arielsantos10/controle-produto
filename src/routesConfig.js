import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./components/Pages/Product/Product";
import Category from "./components/Pages/Category/Category";

export class routesConfig extends Component {
  render() {
    //switch agrupa o componente de rota
    //path ligar link com component, component chama a classe do conteúdo
    return (
      <main>
        <Switch>
          <Route path="/produtos" component={Product} />
          <Route path="/categorias" component={Category} />
        </Switch>
      </main>
    );
  }
}

export default routesConfig;
