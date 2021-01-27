import { combineReducers } from 'redux';
import cards from 'store/reducers/cards';
import cart from 'store/reducers/cart';
import order from 'store/reducers/order';
import products from 'store/reducers/products';

export default combineReducers({
  cards,
  cart,
  order,
  products,
});
