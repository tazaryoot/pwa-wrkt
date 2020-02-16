import { setToLS, getFromLS, removeFromLS } from '../helpers/localstorage';


describe('LS testing', () => {
  const key = 'qq';

  beforeAll(() => {
    localStorage.setItem(key, '{"foo":"bar"}');
  });


  test('add item to LS', async () => {
    const key = 'test-key';
    const data = { a: 1 };
    const result = await setToLS(key, data);
    expect(result).toBeTruthy();
  });

  test('get item from LS by nonexistent key', async () => {
    const result = await getFromLS('d');
    expect(result).toBeNull();
  });

  test('get item from LS by existent key', async () => {
    const testingObject = {foo: 'bar'};

    const result = await getFromLS(key);
    expect(result).toMatchObject(testingObject);
  });

  test('get broken item from LS', async () => {
    const result = await getFromLS('key');
    expect(result).toBeNull();
  });

  test('remove item', async () => {
    await expect(removeFromLS(key)).toResolve();
  })
});


