import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CategoriesDashboard from './components/CategoriesDashboard';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={CategoriesDashboard} />
      </Switch>
    </>
  );
};

export default App;
