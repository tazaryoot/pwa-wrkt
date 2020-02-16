export const setToLS = (key: string, data: Record<string, any>): Promise<any> => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return Promise.resolve(true);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getFromLS = (key: string): Promise<Record<string, any>> => {
  try {
    const dataFromLS = localStorage.getItem(key);
    let result;
    if (dataFromLS != null) {
      result = JSON.parse(dataFromLS);
    } else {
      result = null
    }
    return Promise.resolve(result);
  } catch (e) {
    return Promise.reject(e);
  }
};

export const removeFromLS = (key: string): Promise<any> => {
  try {
    localStorage.removeItem(key);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
};

export default {
  setToLS,
  getFromLS,
  removeFromLS,
}
