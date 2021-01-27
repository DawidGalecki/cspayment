import MENU from 'constants/menu';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon, Message } from 'semantic-ui-react';
import './index.scss';

function Summary(props = {}) {
  const {
    cards: { list: listOfCards },
    order: { details },
  } = props;

  const selectedCardDetails = listOfCards.find((card) => card.selected === true);
  const totalItemsQuantity = details.reduce((sum, item) => (sum += item.quantity), 0);
  let totalOrderValue = 0;
  details.forEach((item) => {
    totalOrderValue += item.quantity * item.price;
  });

  return (
    <div className='summary'>
      <h1 className='summary__title'>Summary</h1>
      <Message
        content='We have just received your payment. Thank you!'
        header='Payment successful'
        icon='check'
        positive
      />
      <Message info icon>
        <Icon name='cart' />
        <Message.Content>
          <Message.Header>Order summary</Message.Header>
          <ul>
            <li>Total items quantity: {totalItemsQuantity},</li>
            <li>Total order value: ${totalOrderValue}.</li>
          </ul>
        </Message.Content>
      </Message>
      <Message warning icon>
        <Icon name='credit card outline' />
        <Message.Content>
          <Message.Header>Selected card details</Message.Header>
          <ul>
            <li>Card holder name: {selectedCardDetails.cardHolderName},</li>
            <li>Card number: {selectedCardDetails.cardNumber},</li>
            <li>CCV code: {selectedCardDetails.ccv},</li>
            <li>Expiration date: {selectedCardDetails.expirationDate}.</li>
          </ul>
        </Message.Content>
      </Message>
      <Link to={MENU.START.LINK}>
        <Button icon labelPosition='left'>
          <Icon name='left arrow' />
          Go back to {MENU.START.TEXT}
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
