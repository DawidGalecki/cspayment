import Slider from 'components/Slider';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { addInitialCards, markCardAsSelected } from 'store/actions';

function Cards(props = {}) {
  const {
    addInitialCards,
    cards: { list: listOfCards },
    markCardAsSelected,
    setSlideNumber,
    selectedCard,
    slideNumber,
  } = props;

  useEffect(() => {
    addInitialCards();
    // eslint-disable-next-line
  }, []);

  return (
    <Slider
      activeSlide={selectedCard && selectedCard.id}
      onClick={markCardAsSelected}
      setSlideNumber={setSlideNumber}
      slideNumber={slideNumber}
      slides={listOfCards}
    />
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addInitialCards: () => dispatch(addInitialCards()),
    markCardAsSelected: (cardId) => dispatch(markCardAsSelected(cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
