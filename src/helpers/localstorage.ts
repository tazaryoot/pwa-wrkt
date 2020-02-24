export const setToLS = (key: string, data: Record<string, any>): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLS = <T>(key: string): T => {
  const dataFromLS = localStorage.getItem(key);
  let result;
  if (dataFromLS != null) {
    result = JSON.parse(dataFromLS);
  } else {
    result = null
  }

  return result
};

export const removeFromLS = (key: string): void => {
  localStorage.removeItem(key);
};

export default {
  setToLS,
  getFromLS,
  removeFromLS,
}
