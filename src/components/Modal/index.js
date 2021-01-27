import { cloneElement, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './index.scss';

export default function Modal(props = {}) {
  const { children, triggerText = '', triggerIcon = '' } = props;

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className='modal'>
      <div className='modal__trigger'>
        <Button icon labelPosition='left' onClick={() => setModalVisible(true)}>
          {triggerIcon && <Icon name={triggerIcon} />}
          {triggerText}
        </Button>
      </div>
      {modalVisible && (
        <div className='modal__container'>
          <div className='modal__content'>
            <span className='modal__closeButton' onClick={() => setModalVisible(false)}>
              &times;
            </span>
            {cloneElement(children, { setModalVisible })}
          </div>
        </div>
      )}
    </div>
  );
}
