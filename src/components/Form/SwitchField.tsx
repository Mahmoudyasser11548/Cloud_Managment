import React from 'react';
import { useField } from 'formik';
import { Field, Switch } from '@fluentui/react-components';

interface SwitchFieldProps {
  label?: string;
  name: string;
  id?: string;
}

const SwitchField = ({ label, ...props }: SwitchFieldProps) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Field
      label={label}
      validationState={meta.touched && meta.error ? 'error' : undefined}
      validationMessage={meta.touched && meta.error ? meta.error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      <Switch
        checked={field.value}
        onChange={(e, checked) => helpers.setValue(checked)}
        {...props}
        {...field}
      />
    </Field>
  );
};

export default SwitchField;
