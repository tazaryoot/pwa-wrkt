import { nanoid } from 'nanoid';

function useIdGen(length: number = 8): string {
  return nanoid(length);
}

export default useIdGen;
