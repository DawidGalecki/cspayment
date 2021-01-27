import {
  SET_IN_STORE_CARD_AS_SELECTED,
  SET_IN_STORE_INITIAL_CARDS_LIST,
  SET_IN_STORE_NEW_CARD_DETAILS,
} from 'constants/actionType';

const initialState = {
  list: [],
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case SET_IN_STORE_CARD_AS_SELECTED: {
      state.list.map((item) => (item.selected = false));
      state.list.find((item) => +item.id === +action.cardId).selected = true;
      return {
        ...state,
      };
    }
    case SET_IN_STORE_INITIAL_CARDS_LIST: {
      return {
        ...state,
        list: action.list,
      };
    }
    case SET_IN_STORE_NEW_CARD_DETAILS: {
      state.list.map((card) => (card.selected = false));
      state.list.push({
        id: state.list.length + 1,
        ccv: +action.details.ccv,
        cardNumber: +action.details.cardNumber,
        expirationDate: action.details.expirationDate,
        cardHolderName: action.details.cardHolderName,
        selected: true,
      });
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default cards;
