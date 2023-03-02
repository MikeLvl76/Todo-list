export const addItemByIndex = (index = 0, item) => {
  if (localStorage.getItem(index.toString())) return;
  localStorage.setItem(index.toString(), item);
};

export const getItems = () => {
    let i = 0;
    const list = [];
    while (true) {
      const item = localStorage.getItem(`${i}`);
      if (!item) break;
      list.push(item);
      i++;
    }
    return list;
  };
  

export const getLastIndex = () => {
  return getItems().length - 1;
};