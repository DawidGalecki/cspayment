import axios from 'axios';
import {
  SET_IN_STORE_CARD_AS_SELECTED,
  SET_IN_STORE_CART_CONTENT,
  SET_IN_STORE_INITIAL_CARDS_LIST,
  SET_IN_STORE_NEW_CARD_DETAILS,
  SET_IN_STORE_ORDER_DETAILS,
  SET_IN_STORE_PRODUCTS_LIST,
} from 'constants/actionType';
import API from 'constants/api';

export function addInitialCards() {
  return async (dispatch) => {
    try {
      const list = [
        {
          id: 1,
          ccv: 123,
          cardNumber: 1234567890123456,
          expirationDate: '12/23',
          cardHolderName: 'John Smith',
          selected: false,
        },
        {
          id: 2,
          ccv: 987,
          cardNumber: 9876543210987654,
          expirationDate: '11/24',
          cardHolderName: 'Jane Doe',
          selected: false,
        },
      ];
      dispatch(setInStoreInitialCardsList(list));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addNewCard(details) {
  return async (dispatch) => {
    try {
      dispatch(setInStoreNewCardDetails(details));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCart() {
  return async (dispatch) => {
    try {
      return await axios
        .get(API.GET_CART)
        .then((result) => {
          dispatch(setInStoreCartContent(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getProductsList() {
  return async (dispatch) => {
    try {
      return await axios
        .get(API.GET_PRODUCTS_LIST)
        .then((result) => {
          dispatch(setInStoreProductsList(result.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
}

export function markCardAsSelected(cardId) {
  return async (dispatch) => {
    try {
      dispatch(setInStoreCardAsSelected(cardId));
    } catch (error) {
      console.log(error);
    }
  };
}

export function saveOrderDetails(details) {
  return async (dispatch) => {
    try {
      dispatch(setInStoreOrderDetails(details));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setInStoreCardAsSelected(cardId = 0) {
  return {
    cardId,
    type: SET_IN_STORE_CARD_AS_SELECTED,
  };
}

export function setInStoreCartContent(content = {}) {
  return {
    content,
    type: SET_IN_STORE_CART_CONTENT,
  };
}

export function setInStoreInitialCardsList(list = []) {
  return {
    list,
    type: SET_IN_STORE_INITIAL_CARDS_LIST,
  };
}

export function setInStoreNewCardDetails(details = {}) {
  return {
    details,
    type: SET_IN_STORE_NEW_CARD_DETAILS,
  };
}

export function setInStoreOrderDetails(details = []) {
  return {
    details,
    type: SET_IN_STORE_ORDER_DETAILS,
  };
}

export function setInStoreProductsList(list = []) {
  return {
    list,
    type: SET_IN_STORE_PRODUCTS_LIST,
  };
}
