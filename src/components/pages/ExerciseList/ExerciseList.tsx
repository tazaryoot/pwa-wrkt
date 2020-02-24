import React from 'react';

import './ExerciseList.scss';
import { Link } from 'react-router-dom';


export interface ExerciseItem {
  title: string;
  code: string;
}


const ExerciseList = () => {
  const list: ExerciseItem[] = [
    {
      title: 'Push-Ups',
      code: 'push-ups',
    },
    {
      title: 'Squats',
      code: 'squats',
    }
  ];

  return (
    <ul className="unstyled-list">
      {
        list.map(x => (
          <li key={x.code}>
            <Link to={`/exercise/${x.code}`}>{x.title}</Link>
          </li>
        ))
      }
    </ul>
  )
};

export default ExerciseList;
