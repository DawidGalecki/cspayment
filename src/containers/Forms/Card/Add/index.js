import Form from 'components/Form';
import './index.scss';

function AddCardForm(props = {}) {
  const { onSubmit, setModalVisible } = props;

  const formFields = [
    {
      label: 'CCV',
      name: 'ccv',
      required: true,
      valueType: 'ccv',
    },
    {
      label: 'Card number',
      name: 'cardNumber',
      required: true,
      valueType: 'cardNumber',
    },
    {
      label: 'Expiration date',
      name: 'expirationDate',
      required: true,
      valueType: 'expirationDate',
    },
    {
      label: 'Card holder name',
      name: 'cardHolderName',
      valueType: 'name',
    },
  ];

  return (
    <div className='addCardForm'>
      <h1 className='addCardForm__title'>Add card form</h1>
      <Form
        formFields={formFields}
        onSubmit={(values) => {
          onSubmit(values);
          setModalVisible(false);
        }}
      />
    </div>
  );
}

export default AddCardForm;
