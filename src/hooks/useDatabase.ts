import FirebaseService, { WRKTDatabaseService } from '../services/firebase.service';

let databaseService: WRKTDatabaseService | null;

const useDatabase = () => {
  if (!databaseService) {
    databaseService = new FirebaseService();
  }

  return databaseService;
}

export default useDatabase
