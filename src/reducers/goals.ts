import { createContext, Dispatch } from 'react';

export interface GoalItem {
  id: string;
  title: string;
  code: string;
  date: string;
  desc?: string;
}

export interface GoalsContext {
  state: GoalsState,
  dispatch: Dispatch<GoalsAction>
}

export type GoalsState = {
  isLoaded: boolean;
  goalList: GoalItem[];
  isLoading: boolean;
  error: string;
};

export type GoalsAction =
  | { type: 'ADD_GOAL', payload: GoalItem }
  | { type: 'FETCH_GOAL_LIST',}
  | { type: 'FETCH_GOAL_LIST_ERROR', error: string}
  | { type: 'FETCH_GOAL_LIST_SUCCESS', payload: GoalItem[]}
  | { type: 'CLEAR_GOAL_LIST',};


const ADD_GOAL = 'ADD_GOAL';
const FETCH_GOAL_LIST = 'FETCH_GOAL_LIST';
const FETCH_GOAL_LIST_SUCCESS = 'FETCH_GOAL_LIST_SUCCESS';
const FETCH_GOAL_LIST_ERROR = 'FETCH_GOAL_LIST_ERROR';
const CLEAR_GOAL_LIST = 'CLEAR_GOAL_LIST';

export const initialState: GoalsState = {
  isLoaded: false,
  isLoading: false,
  goalList: [],
  error: '',
};

const initialContext: GoalsContext = {} as GoalsContext;

export const GoalListContext = createContext(initialContext);

export const reducer = (state: GoalsState, action: GoalsAction): GoalsState => {
  switch (action.type) {
    case FETCH_GOAL_LIST:
      return ({
        ...state,
        isLoading: true,
        isLoaded: false,
        error: '',
      });
    case FETCH_GOAL_LIST_SUCCESS:
      return ({
        ...state,
        goalList: action.payload,
        isLoading: false,
        isLoaded: true,
      });
    case ADD_GOAL:
      return ({
        ...state,
        ...action.payload,
      });
    case FETCH_GOAL_LIST_ERROR:
      return ({
        ...state,
        isLoading: false,
        isLoaded: false,
        error: action.error,
      })
    case CLEAR_GOAL_LIST:
      return ({
        ...initialState
      })
    default:
      return {...state};
  }
};
