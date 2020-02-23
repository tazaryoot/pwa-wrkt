import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Layout from './components/Layout/Layout';
import ExerciseList from './components/pages/ExerciseList/ExerciseList';
import Exercise from './components/pages/Exercise/Exercise';


const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={ExerciseList} />
        <Route exact path="/exercise:code" component={Exercise} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
