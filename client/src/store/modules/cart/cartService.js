const isIDInCart = (state, newItem) => {
  return state.cart.find(item => item.id === newItem.id) === undefined
    ? false
    : true;
};

const isItemInCart = (state, newItem) => {
  const result = { boolean: false, id: null };

  // is id in cart
  if (isIDInCart(state, newItem)) {
    result.boolean = true;
    result.id = newItem.id;
    return result;
  }

  // get items with same category, name, size
  const similarItemsFromCategory = state.cart.filter(
    item =>
      item.category === newItem.category &&
      item.name === newItem.name &&
      item.size === newItem.size
  );

  // if no items from category return false
  if (similarItemsFromCategory.length === 0) {
    return result;
  }

  // compare newItem with category cartItem(s)

  similarItemsFromCategory.forEach(item => {
    const newItemProps = Object.getOwnPropertyNames(newItem);
    const itemProps = Object.getOwnPropertyNames(item);

    // do item objects have the same number of properties
    if (newItemProps.length !== itemProps.length) {
      return;
    }

    // do item objects have the same property names?
    newItemProps.forEach(prop => {
      if (!itemProps.includes(prop)) {
        return;
      }
    });
    // do item objects have the same array values?
    newItemProps.forEach(key => {
      if (
        Array.isArray(newItem[key]) &&
        newItem[key].length === item[key].length
      ) {
        for (const arrItem of newItem[key]) {
          if (item[key].includes(arrItem)) {
            console.log("included", item[key], arrItem);
            result.boolean = true;
            result.id = item.id;
          } else {
            console.log("not included", item[key], arrItem);
            result.boolean = false;
            result.id = null;
            break;
          }
        }
      }
    });
  });
  return result;
};

const ifQuantityZeroRemove = (state, item) => {
  if (item.quantity === 0) {
    removeItemById(state, item.id);
  }
};

const findItemById = (state, id) => state.cart.find(item => item.id === id);

const removeItemById = (state, id) => {
  state.cart = state.cart.filter(item => item.id !== id);
};

const generateRandomId = state => {
  const min = 0;
  const max = 1000;
  const randomNumFunc = () => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let id = randomNumFunc();

  while (isIDInCart(state, { id: id }) === true) {
    id = randomNumFunc();
  }

  return id;
};

export {
  isItemInCart,
  ifQuantityZeroRemove,
  findItemById,
  removeItemById,
  generateRandomId
};
