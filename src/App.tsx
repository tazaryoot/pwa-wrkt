import React, { Dispatch, useReducer } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AddGoal from './components/pages/AddGoal/AddGoal';
import Goal from './components/pages/Goal/Goal';
import Goals from './components/pages/Goals/Goals';
import FirebaseContext from './contexts/firebase';
import { GoalsAction, GoalListContext, GoalsState, initialState, reducer } from './reducers/goals';
import FirebaseService from './services/firebase.service';


const App = () => {
  const [state, dispatch]: [GoalsState, Dispatch<GoalsAction>] = useReducer(reducer, initialState);

  return (
    <Router>
      <FirebaseContext.Provider value={new FirebaseService()}>
        <GoalListContext.Provider value={{state, dispatch}}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Goals} />
              <Route exact path="/goal/:code" component={Goal} />
              <Route exact path="/add-goal" component={AddGoal} />
            </Switch>
          </Layout>
        </GoalListContext.Provider>
      </FirebaseContext.Provider>
    </Router>
  )
};

export default App;
