import React, { Dispatch, useReducer } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AddGoal from './components/pages/AddGoal/AddGoal';
import Goal from './components/pages/Goal/Goal';
import Goals from './components/pages/Goals/Goals';
import { GoalListContext, GoalsAction, GoalsState, initialState, reducer } from './reducers/goals';


const App = () => {
  const [state, dispatch]: [GoalsState, Dispatch<GoalsAction>] = useReducer(reducer, initialState);

  return (
    <Router>
      <GoalListContext.Provider value={{state, dispatch}}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Goals} />
            <Route exact path="/goal/:code" component={Goal} />
            <Route exact path="/add-goal" component={AddGoal} />
          </Switch>
        </Layout>
      </GoalListContext.Provider>
    </Router>
  )
};

export default App;
