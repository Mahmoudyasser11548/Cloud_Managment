import React from 'react';
import { useField } from 'formik';
import { Field, Text } from '@fluentui/react-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

interface PhoneFieldProps {
  label?: string;
  name: string;
}

const PhoneField: React.FC<PhoneFieldProps> = ({ label, name }) => {
  const [field, meta, helpers] = useField(name);
  const { touched, error } = meta;

  return (
    <Field
      label={label}
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      <PhoneInput
        country="eg"
        inputClass={`phone-input ${touched && error ? 'is-invalid' : ''}`}
        onChange={(phone) => {
          helpers.setValue(phone);
        }}
        value={field.value}
        inputProps={{ name: field.name }}
      />
    </Field>
  );
};

export default PhoneField;
