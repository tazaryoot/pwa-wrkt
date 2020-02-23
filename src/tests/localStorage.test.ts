import { setToLS, getFromLS, removeFromLS } from '../helpers/localstorage';


describe('LS testing', () => {
  const key = 'qq';

  beforeAll(() => {
    localStorage.setItem(key, '{"foo":"bar"}');
  });


  test('get item from LS by nonexistent key', () => {
    const result = getFromLS('d');
    expect(result).toBeNull();
  });

  test('get item from LS by existent key', () => {
    const testingObject = {foo: 'bar'};

    const result = getFromLS(key);
    expect(result).toMatchObject(testingObject);
  });

  test('get broken item from LS', () => {
    const result = getFromLS('key');
    expect(result).toBeNull();
  });
});


