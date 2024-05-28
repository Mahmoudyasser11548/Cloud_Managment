import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { InputField, PasswordField } from '@components/index';
import { Button } from '@fluentui/react-components';
import { useTranslation } from 'react-i18next';
import logo from "../assets/imgs/logo.png"
import { useAppSelector } from '@Hooks/StoreHooks';
import { RootState } from '@store/index';
interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const {t} = useTranslation();
  const {language} = useAppSelector((state: RootState) => state.app)

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email(t('Invalid email address')).required(t('Email is required')),
    password: Yup.string().required(t('Password is required')),
  });
  const handleSubmit = (values: LoginValues) => {
    console.log('Form data', values);
  };

  return (
    <div className='relative bg-colorBrandBackground w-full h-screen'>
      <div className="absolute w-[400px] top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-xl">
        <div className='flex items-center'>
          <img src={logo} alt='logo' className='w-20' /> 
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <div className='py-8'>
                <InputField
                  name="email"
                  label={t("Email")}
                  placeholder={t("Enter your email")}
                />
                <PasswordField
                  name="password"
                  label={t("Password")}
                  placeholder={t("Enter your password")}
                />
              </div>
              <div className={`w-full ${language === "en" ? "text-end" : "text-start"}`}>
                <Button type='submit' appearance='primary' className='text-end'>{t("login")}</Button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
