import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

import * as ls from '../../../helpers/localstorage'


interface GoalItem {
  title: string;
  code: string;
}

type Goals = Record<string, GoalItem>;

export type Action =
  | { type: 'ADD_GOAL', payload: Goals }
  | { type: 'GET_GOAL_LIST', payload: Goals}


const ADD_GOAL = 'ADD_GOAL';
const GET_GOAL_LIST = 'GET_GOAL_LIST';

const initialState: Goals = {};


const reducer = (state: Goals, action: Action): Goals => {
  switch (action.type) {
    case GET_GOAL_LIST:
      return ({
        ...state,
        ...action.payload,
      });
    case ADD_GOAL:
      return ({
        ...state,
        ...action.payload,
      });
    default:
      return state;
  }
};


const Goals = () => {
  const [goalList, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const key = 'main-list';
    const list = ls.getFromLS<Goals>(key) || {};

    dispatch({
      type: 'GET_GOAL_LIST',
      payload: list
    })

  }, []);

  const goalCodes = Object.keys(goalList);

  return (
    <>
      <ul className="unstyled-list">
        {
          !!goalCodes.length && goalCodes.map((x: string) => {
            const { code, title }: GoalItem = goalList[x];
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
