import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';

import getGoalsAction from '../../../actions/get-goals.action';
import FirebaseContext from '../../../contexts/firebase';
import { GoalItem, GoalListContext } from '../../../reducers/goals';
import FirebaseService from '../../../services/firebase.service';

import './style.scss';


const Goal = () => {
  const { code } = useParams();
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
              <button className="goal__button goal__button_delete">Delete</button>
            </div>
          </>
        )
      }
    </section>
  );
};

export default Goal;
