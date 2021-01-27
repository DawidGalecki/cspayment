function cardNumber(value = '') {
  return value && /^[0-9]{16}$/.test(value) ? undefined : 'Card number must be 16 digits long';
}

function ccv(value = '') {
  return value && /^[0-9]{3}$/.test(value) ? undefined : 'CCV must be 3 digits long';
}

function expirationDate(value = '') {
  return value && /^[0-9]{2}\/[0-9]{2}$/.test(value.toLowerCase())
    ? undefined
    : 'Expiration date must be in format MM/DD';
}

function isRequired(value = '') {
  return !!value ? undefined : 'This field is required';
}

function name(value = '') {
  return value && /^[a-z ]{0,}$/.test(value.toLowerCase()) ? undefined : 'Name is invalid';
}

export function validateValue({ required = false, validator = '', value = '' }) {
  if (required && !value) {
    return isRequired(value);
  }
  if (value) {
    const selectedValidator = validatorsList[validator];
    if (selectedValidator) {
      return selectedValidator(value);
    }
    return undefined;
  }
  return undefined;
}

const validatorsList = {
  'cardNumber': cardNumber,
  'ccv': ccv,
  'expirationDate': expirationDate,
  'name': name,
};
