import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { GoalItem } from '../reducers/goals';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export interface WRKTFirebase {
  getGoals(): Promise<GoalItem[] | null>;
}


class FirebaseService implements WRKTFirebase {
  private db: firebase.firestore.Firestore;

  constructor() {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    this.db = firebase.firestore()
  }

  getGoals(): Promise<GoalItem[] | null> {
    return this.db
      .collection('goals')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          return null;
        }

        const docs: GoalItem[] = [];

        querySnapshot.forEach((doc) => {
          docs.push(doc.data() as GoalItem);
        })

        return docs;
      });
  };
}



export default FirebaseService;
