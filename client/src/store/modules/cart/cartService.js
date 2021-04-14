const isItemInCart = (state, newItem) => {
  return state.cart.find((item) => item.id === newItem.id) === undefined
    ? false
    : true;
};

const ifQuantityZeroRemove = (state, item) => {
  if (item.quantity === 0) {
    removeItemById(state, item.id);
  }
};

const findItemById = (state, id) => state.cart.find((item) => item.id === id);

const removeItemById = (state, id) => {
  state.cart = state.cart.filter((item) => item.id !== id);
};

const generateRandomId = (state) => {
  const min = 0;
  const max = 1000;
  const randomNumFunc = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let id = randomNumFunc();

  while (isItemInCart(state, { id: id }) === true) {
    id = randomNumFunc();
  }

  return id;
};

export {
  isItemInCart,
  ifQuantityZeroRemove,
  findItemById,
  removeItemById,
  generateRandomId,
};
