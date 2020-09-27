import { createContext } from 'react';
import FirebaseService from '../services/firebase.service';

const initialContext: FirebaseService = {} as FirebaseService;
const FirebaseContext = createContext(initialContext);

export default FirebaseContext;
