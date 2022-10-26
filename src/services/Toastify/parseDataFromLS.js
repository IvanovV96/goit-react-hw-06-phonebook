export const parseDataFromLS = (key, initialValue = []) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return initialValue;
  }
};
