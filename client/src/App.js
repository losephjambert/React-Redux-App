import React from "react";
import { Switch, Route } from "react-router-dom";

import CategoriesDashboard from "./components/CategoriesDashboard";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={CategoriesDashboard} />
    </Switch>
  );
};

export default App;
