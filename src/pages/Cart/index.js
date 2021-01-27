import MENU from 'constants/menu';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Table } from 'semantic-ui-react';
import { getProductsList, saveOrderDetails } from 'store/actions';
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

function Cart(props = {}) {
  const {
    cart: {
      content: { products: productsInCart },
    },
    getProductsList,
    order: { details = [] },
    products: { list: productsList },
    saveOrderDetails,
  } = props;

  useEffect(() => {
    getProductsList();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const productsDetails =
      productsInCart &&
      productsInCart.map((productInCart) => {
        const foundIndex = productsList.findIndex(
          (product) => product.id === productInCart.productId,
        );
        const foundProduct = productsList[foundIndex];
        return foundProduct
          ? {
              id: foundProduct.id,
              title: foundProduct.title,
              image: foundProduct.image,
              price: foundProduct.price,
              quantity: productInCart.quantity,
            }
          : {};
      });
    saveOrderDetails(productsDetails);
    // eslint-disable-next-line
  }, [productsInCart, productsList]);

  let total = 0;

  return (
    <div className='cart'>
      <h1 className='cart__title'>Cart</h1>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Price per 1 piece</Table.HeaderCell>
            <Table.HeaderCell>Total price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {details.map((productDetails) => {
            const sum = +productDetails.quantity * +productDetails.price;
            total += sum;
            return (
              <Table.Row key={uuidv4()}>
                <Table.Cell>
                  <img alt='' className='cart__image' src={productDetails.image} />
                </Table.Cell>
                <Table.Cell>{productDetails.title}</Table.Cell>
                <Table.Cell>{productDetails.quantity}</Table.Cell>
                <Table.Cell>{productDetails.price ? `$${productDetails.price}` : ''}</Table.Cell>
                <Table.Cell>{sum ? `$${sum}` : ''}</Table.Cell>
              </Table.Row>
            );
          })}
          <Table.Row key='cartLastRow'>
            <Table.Cell />
            <Table.Cell />
            <Table.Cell />
            <Table.Cell>Total:</Table.Cell>
            <Table.Cell>{total ? `$${total}` : ''}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Link to={MENU.BILLING.LINK}>
        <Button floated='right' icon labelPosition='right'>
          Proceed to billing
          <Icon name='right arrow' />
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductsList: () => dispatch(getProductsList()),
    saveOrderDetails: (details) => dispatch(saveOrderDetails(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
