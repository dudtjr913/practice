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
    return alert('존재하지 않는 값입니다.');
  }

  return exValue;
};
