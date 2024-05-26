import React from 'react';
import { useField } from 'formik';
import { Dropdown, Field, Option } from '@fluentui/react-components';

interface SelectFieldProps {
  label?: string;
  name: string;
  options: { key: string; text: string }[];
  keyValue?: string;
  getOptionLabel?: (option: { key: string; text: string }) => string;
  callBack?: (value: any) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  keyValue,
  getOptionLabel,
  callBack = () => {},
}) => {
  const [field, meta, helpers] = useField(name);
  const { touched, error } = meta;

  const handleChange = (event: React.FormEvent<HTMLDivElement>, option?: Option | null) => {
    if (option) {
      helpers.setValue(option.key as string);
      callBack(option);
    } else {
      helpers.setValue('');
      callBack(null);
    }
  };

  const selectedObj =
    options &&
    options?.find((a) =>
      keyValue ? a[keyValue] === field.value : a === field.value,
    );

  const handleGetLabel = (o) => {
    if (getOptionLabel) {
      return getOptionLabel(o);
    }
    if (typeof o[title] === "object") {
      return o[title][locale.code];
    }
    return o[title];
  };


  return (
    <Field
      label={label}
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem' }}
    >
      <Dropdown
        selectedKey={field.value}
        onChange={handleChange}
        options={options}
        placeholder="Select an option"
      />
    </Field>
  );
};

export default SelectField;
