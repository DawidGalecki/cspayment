import { Field, Form } from 'react-final-form';
import { Button } from 'semantic-ui-react';
import { validateValue } from 'utils/validators';
import './index.scss';

function RFForm(props = {}) {
  const { formFields, onSubmit } = props;

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <Field
              key={`field${field.name}`}
              name={field.name}
              validate={(value) => {
                return validateValue({
                  required: field.required,
                  validator: field.valueType,
                  value,
                });
              }}
            >
              {({ input, meta }) => (
                <div className='form__field'>
                  <label className='form__field--label'>{field.label}</label>
                  <input
                    {...input}
                    className='form__field--input'
                    placeholder={`Enter ${field.label}`}
                  />
                  {meta.touched && meta.error && (
                    <span className='form__field--validationError'>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
          ))}
          <div className='form__buttonsContainer'>
            <Button type='submit'>Add card</Button>
          </div>
        </form>
      )}
    </Form>
  );
}

export default RFForm;
