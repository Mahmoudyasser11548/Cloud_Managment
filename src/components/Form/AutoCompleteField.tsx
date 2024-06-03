import React from 'react';
import { useField } from 'formik';
import { AutoComplete } from 'primereact/autocomplete';
import classNames from 'classnames';
import { useDebouncedCallback } from 'use-debounce';
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.css";

interface Option {
  label: string;
  value: any;
}

interface AutoCompleteInputProps {
  label: string;
  name: string;
  options?: Option[];
  optionLabel?: string;
  callBack?: (query: string) => void;
}

const AutoCompleteInput = ({
  label,
  name,
  options = [],
  optionLabel = '',
  callBack = () => {},
  ...props
}: AutoCompleteInputProps) => {
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  const debounced = useDebouncedCallback(
    ({query}: {query: string}) => {
      callBack(query);
    },
    1000
  );

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="p-inputgroup">
        <AutoComplete
          className={classNames({
            'p-invalid': error && touched,
          })}
          {...field}
          placeholder={label}
          value={field.value}
          suggestions={options}
          completeMethod={debounced}
          onChange={(e) => {
            helpers.setValue(e.value);
          }}
          field={optionLabel}
          forceSelection
          {...props}
        />
      </div>
      {touched && error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{error}</div>}
    </div>
  );
};

export default AutoCompleteInput;
