import { SET_IN_STORE_PRODUCTS_LIST } from 'constants/actionType';

const initialState = {
  list: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_IN_STORE_PRODUCTS_LIST: {
      return {
        ...state,
        list: action.list,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default products;
