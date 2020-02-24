import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Goal from './components/pages/Goal/Goal';
import Goals from './components/pages/Goals/Goals';


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Goals} />
        <Route exact path="/goal/:code" component={Goal} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
