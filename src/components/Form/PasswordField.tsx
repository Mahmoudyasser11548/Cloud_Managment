import React, { useState } from 'react';
import { useField } from 'formik';
import { Input, Field, Text, Button } from '@fluentui/react-components';
import { EyeRegular, EyeOffRegular } from '@fluentui/react-icons';

interface PasswordFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, placeholder, name }) => {
  const [field, meta] = useField(name);
  const { touched, error } = meta;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Field
      label={label}
      validationState={touched && error ? 'error' : undefined}
      validationMessage={touched && error ? error : undefined}
      style={{ marginBottom: '1rem', position: 'relative' }}
    >
      <div className="relative">
        <Input
        className='w-full'
          {...field}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
        />
        <Button
          appearance="transparent"
          icon={showPassword ? <EyeRegular /> : <EyeOffRegular />}
          onClick={togglePasswordVisibility}
          style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)' }}
        />
      </div>
    </Field>
  );
};

export default PasswordField;
