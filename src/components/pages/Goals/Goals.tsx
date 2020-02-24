import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import * as ls from '../../../helpers/localstorage'


const ADD_GOAL = 'ADD_GOAL';
const GET_GOAL_LIST = 'GET_GOAL_LIST';

const initialState: GoalItem[] = [];

export type Action =
  | { type: 'ADD_GOAL', payload: GoalItem[] }
  | { type: 'GET_GOAL_LIST', payload: GoalItem[]}

interface GoalItem {
  title: string;
  code: string;
}

const reducer = (state: GoalItem[], action: Action): GoalItem[] => {
  switch (action.type) {
    case GET_GOAL_LIST:
      return ([
        ...state,
        ...action.payload,
      ]);
    case ADD_GOAL:
      return ([
        ...state,
        ...action.payload,
      ]);
    default:
      return state;
  }
};


const Goals = () => {
  const [goalList, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const key = 'main-list';
    const list = ls.getFromLS<GoalItem[]>(key);

    dispatch({
      type: 'GET_GOAL_LIST',
      payload: list
    })

  }, []);

  const clickHandler = () => {
    console.log('>>>>>> qq:', 11);
  };

  return (
    <>
      <ul className="unstyled-list">
        {
          !!goalList && goalList.map((x: GoalItem) => {
            return (
              <li key={x.code}>
                <Link to={`/goal/${x.code}`}>{x.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <button onClick={clickHandler}>Add goal</button>
    </>
  )
};

export default Goals;
