import React from 'react';
import { Switch, Route } from 'react-router';

import Layout from './components/Layout/Layout';
import ExerciseList from './components/pages/ExerciseList/ExerciseList';
import Exercise from './components/pages/Exercise/Exercise';


const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={ExerciseList} />
      <Route exact path="/exercise" component={Exercise} />
    </Switch>
  </Layout>
);

export default App;
