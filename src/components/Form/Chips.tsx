import React from 'react';
import { useField } from 'formik';
import { Chips } from 'primereact/chips';
import { KeyFilterType } from 'primereact/keyfilter';

interface ChipsFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  keyfilter?: KeyFilterType 
}

const ChipsField: React.FC<ChipsFieldProps> = ({ label, name, placeholder, keyfilter = "num"}) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const handleChange = (chips: any[]) => {
    setValue(chips);
  };

  return (
    <div className='flex flex-col mb-3'>
      <label htmlFor={name}>{label}</label>
      <Chips
        className='chips text-sm my-2 border p-2 rounded'
        keyfilter={keyfilter}
        id={name}
        name={name}
        value={value || []}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.value)}
      />
      {meta.touched && meta.error && <div style={{ color: 'red', marginTop: '0.5rem' }}>{meta.error}</div>}
    </div>
  );
};

export default ChipsField;
