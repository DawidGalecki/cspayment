import Image from 'components/Image';
import MENU from 'constants/menu';
import { ReactComponent as ShoppingCart } from 'images/shoppingCart.svg';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCart } from 'store/actions';
import './index.scss';

function Start(props = {}) {
  const {
    cart: { content },
    getCart,
  } = props;

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);

  const badgeValue = content?.products
    ? content.products.map((product) => product.quantity).reduce((a, b) => +a + +b)
    : 0;

  return (
    <div className='start'>
      <h1 className='start__title'>Start</h1>
      <p className='start__subtitle'>Click on cart to display it's content:</p>
      <Link to={MENU.CART.LINK}>
        <Image badgeValue={badgeValue} image={ShoppingCart} />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCart: () => dispatch(getCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
