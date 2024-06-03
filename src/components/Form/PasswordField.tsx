import React, { useState } from 'react';
import { useField } from 'formik';
import { Input, Field, Text, Button } from '@fluentui/react-components';
import { EyeRegular, EyeOffRegular } from '@fluentui/react-icons';
import { useAppSelector } from '@Hooks/StoreHooks';
import { RootState } from '@store/index';

interface PasswordFieldProps {
  label?: string;
  placeholder?: string;
  name: string;
}

const PasswordField = ({ label, placeholder, name }: PasswordFieldProps) => {
  const [field, meta] = useField(name);
  const { touched, error } = meta;
  const [showPassword, setShowPassword] = useState(false);
  const {language} = useAppSelector((state: RootState) => state.app)

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
          style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
          className={`${language === "en" ? 'right-2' : "left-2"}`}
        />
      </div>
    </Field>
  );
};

export default PasswordField;
