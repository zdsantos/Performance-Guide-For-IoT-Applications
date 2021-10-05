import React, { ChangeEvent } from 'react';
import PropTypes from 'prop-types';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'Senha deve ter pelo menos 8 caracteres com, no mínimo, 1 dígito, 1 letra minúscula e 1 maiúscula',
  },
  number: {
    regex: /^\d+$/,
    message: 'Deve conter apenas números',
  },
};

const propTypes = {
  type: PropTypes.oneOf(['any', 'email', 'password', 'number']),
  require: PropTypes.bool
}

const useForm = (
  type,
  required = false,
) => {
  const [value, setValue] = React.useState<string>('');
  const [error, setError] = React.useState<string | null>(null);

  const validate = (value) => {
    if (required && (value === null || value === '')) {
      setError('Preencha um valor');
      return false;
    }

    if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    }

    setError(null);
    return true;
  };

  const onChange = (event) => {
    if (error) validate(event.target.value);
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

useForm.propTypes = propTypes;

export default useForm;
