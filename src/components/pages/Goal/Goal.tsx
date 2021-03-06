import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';

import getGoalsAction from '../../../actions/get-goals.action';
import useDatabase from '../../../hooks/useDatabase';
import { GoalItem, GoalListContext } from '../../../reducers/goals';
import { WRKTDatabaseService } from '../../../services/firebase.service';

import './style.scss';


const Goal = () => {
  const { code } = useParams();
  const history = useHistory();
  const { state: goalsState, dispatch } = useContext(GoalListContext);
  const firebase: WRKTDatabaseService = useDatabase();

  useEffect(() => {
    (async () => {
      if (!goalsState.isLoaded) {
        await getGoalsAction(dispatch, firebase);
      }
    })()
  }, []);

  if (!goalsState.isLoaded) {
    return <div>Goal not found</div>;
  }

  const deleteGoal = async (): Promise<unknown> => {
    await firebase.deleteGoal(goalItem.id);

    dispatch({
      type: 'DELETE_GOAL'
    })

    history.push('..');

    return;
  }

  const goalItem: GoalItem = goalsState.goalList.find(x => x.code === code) || [] as unknown as GoalItem;

  return (
    <section className="goal">
      {
        goalItem && (
          <>
            <div className="goal__title">{goalItem.title}</div>
            <div className="goal__description">{goalItem.desc}</div>
            <div className="goal__buttons-wrapper">
              <button className="goal__button goal__button_edit">Edit</button>
              <button
                className="goal__button goal__button_delete"
                onClick={deleteGoal}
              >
                Delete
              </button>
            </div>
          </>
        )
      }
    </section>
  );
};

export default Goal;
