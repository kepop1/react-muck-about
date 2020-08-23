import React from "react";
import { Switch, Route } from "react-router-dom";
import Restaurants from "./pages/Restaurants";
import Checkout from "./pages/Checkout";
import Restaurant from "./pages/Restaurant";

const Routes = () => {
  return (
    <Switch>
      <Route path="/restaurants" exact component={Restaurants} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/restaurants/:id" exact component={Restaurant} />
    </Switch>
  );
};

export default Routes;
