import React from 'react';
import { createContext, FC } from 'react';
import FirebaseService from '../services/firebase.service';

export const FirebaseContext = createContext(new FirebaseService());

type TProps = {
  children: unknown;
}

const FirebaseContextProvider: FC<TProps> = ({ children }) => {
  return (
    <FirebaseContext.Provider value={new FirebaseService()} >
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseContextProvider;
