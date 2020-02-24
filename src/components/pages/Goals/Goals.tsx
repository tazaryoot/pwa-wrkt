import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as ls from '../../../helpers/localstorage';
import { GoalListContext, GoalItem, GoalsList } from '../../../reducers/goals';


const Goals = () => {
  const { state: goalList, dispatch } = useContext(GoalListContext);

  useEffect(() => {
    const key = 'main-list';
    const list = ls.getFromLS<GoalsList>(key) || {};

    console.log('>>>>>> list:', list);
    dispatch({
      type: 'GET_GOAL_LIST',
      payload: list
    })

  }, []);

  console.log('>>>>>> goalList:',goalList );
  let goalCodes: string[] = [];
  if (goalList) {
    goalCodes = Object.keys(goalList);
  }

  return (
    <>
      <ul className="unstyled-list">
        {
          !!goalCodes.length && goalCodes.map((x: string) => {
            const { code, title } = goalList[x];
            return (
              <li key={code}>
                <Link to={`/goal/${code}`}>{title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Link to="/add-goal">Add goal</Link>
    </>
  )
};

export default Goals;
