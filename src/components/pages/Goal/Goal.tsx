import React from 'react';
import { useParams } from 'react-router';


const Goal = () => {
  const { code } = useParams();
  return (<section>{code}</section>);
};

export default Goal;
