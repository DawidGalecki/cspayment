import Modal from 'components/Modal';
import AddCardForm from 'containers/Forms/Card/Add';

export default function Add(props = {}) {
  const { onSubmit } = props;

  return (
    <Modal triggerIcon='plus' triggerText='Add another card'>
      <AddCardForm onSubmit={onSubmit} />
    </Modal>
  );
}
