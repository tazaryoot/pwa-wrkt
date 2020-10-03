import React from 'react';

import { GoalItem, GoalsAction } from '../reducers/goals';
import { WRKTDatabaseService } from '../services/firebase.service';

export default async function getGoalsAction(dispatch: React.Dispatch<GoalsAction>, service: WRKTDatabaseService): Promise<unknown> {
  dispatch({
    type: 'FETCH_GOAL_LIST',
  })

  try {
    const docs: GoalItem[] = await service.getGoals() || [];

    dispatch({
      type: 'FETCH_GOAL_LIST_SUCCESS',
      payload: docs
    });

    return true;

  } catch (e) {
    dispatch({
      type: 'FETCH_GOAL_LIST_ERROR',
      error: e.toString(),
    });

    return false;
  }

}
