import React from 'react';
import { useParams } from 'react-router-dom';

import * as ls from '../../../helpers/localstorage';

import './Exercise.scss';


const Exercise = () => {
  const { code }: { code?: string } = useParams();

  let data = null;

  if (code) {
    data = ls.getFromLS(code);
  }




  return (
    <div>{code}</div>
  )
};

export default Exercise;
