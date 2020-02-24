import { createContext, Dispatch } from 'react';

export interface GoalItem {
  title: string;
  code: string;
}

export type GoalsList = Record<string, GoalItem>;

export type Action =
  | { type: 'ADD_GOAL', payload: GoalsList }
  | { type: 'GET_GOAL_LIST', payload: GoalsList};

export interface GoalsContext {
  state?: GoalsList,
  dispatch?: Dispatch<Action>
}


const ADD_GOAL = 'ADD_GOAL';
const GET_GOAL_LIST = 'GET_GOAL_LIST';

export const initialState: GoalsList = {};

const initialContext: any = {};

export const GoalListContext = createContext(initialContext);

export const reducer = (state: GoalsList, action: Action): GoalsList => {
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
      return {...state};
  }
};
