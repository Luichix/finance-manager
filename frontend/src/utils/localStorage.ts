export const loadFromStorage = (key: string) => {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) return null;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return null;
  }
};
export const saveToStorage = (key: string, value: any) => {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (e) {
    console.warn(e);
  }
};

export const removeToStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn(e);
  }
};
