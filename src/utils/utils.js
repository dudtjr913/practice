import {todoErrorMessage} from './constant.js';

export const generateId = (list) => {
  const id = Math.floor(Math.random() * 999999);
  const exId = list.find((key) => key.id === id);
  if (exId) {
    return generateId();
  }

  return id;
};

export const isValueExist = (list, key, value) => {
  const exValue = list.find((obj) => obj[key].trim() === value.trim());
  if (exValue) {
    return true;
  }

  return false;
};

export const getExValue = (list, key, value) => {
  const exValue = list.find((obj) => obj[key].trim() === value.trim());
  if (!exValue) {
    return alert(todoErrorMessage.NOT_HAVING_VALUE);
  }

  return exValue;
};
