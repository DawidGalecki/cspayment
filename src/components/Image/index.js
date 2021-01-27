import React from 'react';
import './index.scss';

export default function Image(props = {}) {
  const { badgeValue, image: Image } = props;

  return (
    <div className='image'>
      <Image className='image__image' />
      {badgeValue ? <span className='image__badge'>{badgeValue}</span> : null}
    </div>
  );
}
