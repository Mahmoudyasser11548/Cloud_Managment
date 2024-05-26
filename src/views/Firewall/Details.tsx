import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from '@fluentui/react-components';
import { CustomDialog, DatePickerField, DetailsCard, ImageField, InputField, PDFField, PasswordField, PhoneField, SubmitButton, SwitchField, VideoField } from '@components/index';

// const options = [
//   { key: 'option1', text: 'Option 1' },
//   { key: 'option2', text: 'Option 2' },
//   { key: 'option3', text: 'Option 3' },
// ];

const Details = () => {
  const initialValues = { 
    name: '',
    email: '',
    password: '',
    date: '',
    phoneNumber: '',
    selectField: '',
    toogle: false,
    img: "",
    pdfFile: {
      base64: null,
      url: null,
      readUrl: null,
    },
    video: ""
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmAction = () => {
    // Your logic for handling the confirm action
    console.log('Confirmed action');
    handleCloseDialog();
  };

  return (
    <DetailsCard 
      title='Create Rule'
      body={
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
          >
          {() => (
            <Form>
              <div>
                <InputField
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                />
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                />
                <PasswordField
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                <DatePickerField
                  name="date"
                  label="Date"
                  placeholder="Select date"
                  enableTime={true}
                />
                <PhoneField name="phoneNumber" label="Phone Number" />
                {/* <SelectField
                  name="selectField"
                  label="Select Field"
                  options={options}
                /> */}
                <SwitchField
                  name="toogle"
                  label="Switch Field"
                />
                <ImageField 
                  name='img'
                  mode='add'
                  width={200}
                  height={200}
                />
                <PDFField 
                  name='pdfFile'
                  mode='add'
                  width={200}
                  height={200}
                />
                <VideoField  
                  name='video'
                  mode='add'
                  width={200}
                  height={200}
                />
              </div>
              <SubmitButton />
              <CustomDialog 
                title="Dialog Example"  
                btnLabel='Open' 
                body={
                  <>
                    <h1>Hello</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro ipsam in dicta?</p>
                  </>
                } 
                confirmation={handleConfirmAction}
              />
            </Form>
          )}
        </Formik>
      }
    />
  )
}

export default Details