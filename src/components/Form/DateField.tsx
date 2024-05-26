import React from 'react';
import { useField } from 'formik';
import { Field } from '@fluentui/react-components';
import { DatePicker } from "@fluentui/react-datepicker-compat";

interface DatePickerFieldProps {
  label: string;
  placeholder?: string;
  enableTime?: boolean;
  callBack?: (value: Date | null) => void;
  id?: string;
  name: string;
}

const DatePickerField = ({
  label,
  placeholder = 'Enter date',
  enableTime = false,
  callBack = () => {},
  id,
  name,
  ...props
}: DatePickerFieldProps) => {
  const [field, meta, helpers] = useField(name);
  const { touched, error } = meta;

  return (
    <Field
      label={label}
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      <DatePicker
        id={id || name}
        placeholder={placeholder}
        showTime={enableTime}
        value={field.value}
        onChange={(e, newDate) => {
          helpers.setValue(newDate);
          callBack(newDate);
        }}
        {...props}
      />
    </Field>
  );
};

export default DatePickerField;
