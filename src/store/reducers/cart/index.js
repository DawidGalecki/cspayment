import { SET_IN_STORE_CART_CONTENT } from 'constants/actionType';

const initialState = {
  content: {},
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case SET_IN_STORE_CART_CONTENT: {
      return {
        ...state,
        content: action.content,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default cart;
