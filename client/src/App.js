import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CategoriesDashboard from './components/CategoriesDashboard';

const App = () => {
  return (
    <>
      <h1>Public Api Explorer</h1>
      <Switch>
        <Route exact path='/' component={CategoriesDashboard} />
      </Switch>
    </>
  );
};

export default App;
