import React, { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';

import FirebaseContext from '../../../contexts/firebase';
import useIdGen from '../../../hooks/useIdGen';
import { GoalItem, GoalListContext } from '../../../reducers/goals';


type AddGoalItem = Omit<GoalItem, 'code'>;


const AddGoal: FC = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const { dispatch } = useContext(GoalListContext);
  const code = useIdGen();

  const firebase = useContext(FirebaseContext);

  const addGoal = async (data: AddGoalItem) =>  {
    const newGoal: GoalItem = {
      ...data,
      code: code,
    }

    try {
      await firebase.addGoal(newGoal);

      dispatch({
        type: 'CLEAR_GOAL_LIST',
      })

    } catch (e) {
      console.log('>>>>>> e:', e);
    }

    reset();
  };

  return (
    <section className="add-goal">
      <form className="add-goal-form" onSubmit={handleSubmit(addGoal)}>
        <div className="add-goal-form__wrapper-field">
          <label>
            Goal Title
            <input name="title" ref={register<HTMLInputElement>({ required: true })} />
          </label>

          {errors.title && <span>Title is required</span>}
        </div>

        <div className="add-goal-rom__wrapper-field">
          <label>
            Goal description
            <input name="desc" ref={register} />
          </label>
        </div>

        <button type="submit">Add Goal</button>
      </form>
    </section>
  )
};

export default AddGoal;
