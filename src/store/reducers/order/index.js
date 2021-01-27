import { SET_IN_STORE_ORDER_DETAILS } from 'constants/actionType';

const initialState = {
  details: [],
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case SET_IN_STORE_ORDER_DETAILS: {
      return {
        ...state,
        details: action.details,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default order;
