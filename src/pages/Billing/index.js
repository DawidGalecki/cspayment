import MENU from 'constants/menu';
import AddCardModal from 'containers/Modals/Card/Add';
import CardsSlider from 'containers/Sliders/Cards';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { addNewCard } from 'store/actions';
import './index.scss';

function Billing(props = {}) {
  const {
    addNewCard,
    cards: { list: listOfCards },
  } = props;

  const [slideNumber, setSlideNumber] = useState(0);

  let selectedCard = listOfCards.find((card) => card.selected);

  const handleAddCard = (values) => {
    addNewCard(values).then(() => {
      setSlideNumber(listOfCards.length - 1);
    });
  };

  return (
    <div className='billing'>
      <h1 className='billing__title'>Billing</h1>
      <CardsSlider
        selectedCard={selectedCard}
        setSlideNumber={setSlideNumber}
        slideNumber={slideNumber}
      />
      <AddCardModal onSubmit={handleAddCard} />
      {selectedCard && (
        <Link to={MENU.SUMMARY.LINK}>
          <Button floated='right' icon labelPosition='right'>
            Proceed to summary
            <Icon name='right arrow' />
          </Button>
        </Link>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCard: (details) => dispatch(addNewCard(details)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Billing);
