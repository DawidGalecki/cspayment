import { ReactComponent as Check } from 'images/check.svg';
import React from 'react';
import './index.scss';

export default function Slider(props = {}) {
  const { activeSlide = 0, onClick, slides = [], slideNumber, setSlideNumber } = props;

  const showPrevSlide = () => {
    slideNumber > 0 && setSlideNumber((value) => value - 1);
  };

  const showNextSlide = () => {
    slideNumber < slides.length - 1 && setSlideNumber((value) => value + 1);
  };

  return (
    <div className='slider'>
      <input className='slider__arrow' onClick={() => showPrevSlide()} type='button' value='Prev' />
      <div className='slider__slideContainer' onClick={() => onClick(slides[slideNumber]?.id || 0)}>
        <div className='slider__slideContainer--dark'>
          <span className='slider__cardDetails slider__cardDetails--cardHolderName'>{`Card holder name: ${slides[slideNumber]?.cardHolderName}`}</span>
          <span className='slider__cardDetails slider__cardDetails--cardNumber'>{`Card number: ${slides[slideNumber]?.cardNumber}`}</span>
          <span className='slider__cardDetails slider__cardDetails--ccv'>{`CCV: ${slides[slideNumber]?.ccv}`}</span>
          <span className='slider__cardDetails slider__cardDetails--expirationDate'>{`Expiration date: ${slides[slideNumber]?.expirationDate}`}</span>
          {slides[slideNumber]?.id === activeSlide && <Check className='slider__check' />}
        </div>
      </div>
      <input className='slider__arrow' type='button' onClick={() => showNextSlide()} value='Next' />
    </div>
  );
}
