import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { GoalItem } from '../reducers/goals';


interface FirebaseGoalItem extends Omit<GoalItem, 'date'> {
  date: firebase.firestore.Timestamp;
  desc: string;
}

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

export interface WRKTDatabaseService {
  getGoals(): Promise<GoalItem[] | null>;
  addGoal(goal: GoalItem): Promise<void>;
  deleteGoal(id: string): Promise<void>;
}


class FirebaseService implements WRKTDatabaseService {
  private db: firebase.firestore.Firestore;
  private collectionGoals = 'goals';

  constructor() {
    !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

    this.db = firebase.firestore()
  }

  getGoals(): Promise<GoalItem[] | null> {
    return this.db
      .collection(this.collectionGoals)
      .orderBy('date', 'asc')
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          return null;
        }

        const firebaseDoc: FirebaseGoalItem[] = [];

        querySnapshot.forEach((doc) => {
          const docData: FirebaseGoalItem = doc.data() as FirebaseGoalItem;

          const firebaseDocItem: FirebaseGoalItem = {
            ...docData,
            id: doc.id,
          }

          firebaseDoc.push(firebaseDocItem);
        })

        const docs: GoalItem[] = firebaseDoc.map(doc => {
          const { code, date, desc, title, id } = doc;

          return ({
            date: date.toDate().toLocaleDateString(),
            id,
            code,
            title,
            desc,
          })
        })

        return docs;
      });
  };


  addGoal(goal: GoalItem): Promise<void> {
    const { desc = '', title, code } = goal;
    const firebaseGoal: Omit<FirebaseGoalItem, 'id'> = {
      desc,
      code,
      title,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    return this.db
      .collection(this.collectionGoals)
      .doc()
      .set(firebaseGoal);
  }


  deleteGoal(id: string): Promise<void> {
    return this.db
      .collection(this.collectionGoals)
      .doc(id)
      .delete();
  }
}



export default FirebaseService;
