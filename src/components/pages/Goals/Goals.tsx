import React, { FC, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getGoalsAction from '../../../actions/get-goals.action';

import FirebaseContext from '../../../contexts/firebase';
import { GoalListContext } from '../../../reducers/goals';
import FirebaseService from '../../../services/firebase.service';


const Goals: FC = () => {
  const { state: goalsState, dispatch } = useContext(GoalListContext);
  const firebase: FirebaseService = useContext(FirebaseContext);

  useEffect(() => {
    (async () => {
      if (!goalsState.isLoaded) {
        await getGoalsAction(dispatch, firebase);
      }
    })()
  }, []);

  if (!goalsState.isLoaded) {
    return null;
  }

  return (
    <>
      <ul className="unstyled-list">
        {
          !!goalsState.goalList.length && goalsState.goalList.map(({code, title}) => {
            return (
              <li key={code}>
                <Link to={`/goal/${code}`}>{title}</Link>
              </li>
            )
          })
        }
        {
          !goalsState.goalList.length && (
            <div>Goal list is empty</div>
          )
        }
      </ul>
      <Link to="/add-goal">Add goal</Link>
    </>
  )
};

export default Goals;
