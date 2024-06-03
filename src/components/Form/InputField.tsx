import React from 'react';
import { useField } from 'formik';
import { Input, Field, Text } from '@fluentui/react-components';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
  type?: string;
}

const InputField = ({ label, placeholder, ...props }: InputFieldProps) => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;

  return (
    <Field
      label={label}
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      <Input
        {...field}
        {...props}
        placeholder={placeholder}
      />
    </Field>
  );
};

export default InputField;
