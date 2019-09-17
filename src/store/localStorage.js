export const saveState = (state) => {
  try {
    const newState = JSON.stringify(state);
    localStorage.setItem('state', newState);
  } catch (err) {
    console.log(err);
  }
};

export const loadState = () => {
  try {
    const savedState = localStorage.getItem('state');
    if (savedState === null) return undefined;
    return JSON.parse(savedState);
  } catch (err) {
    return undefined;
  }
};