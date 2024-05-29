import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { DatePickerField, DetailsCard, Dialog, ImageField, InputField, MultiSelectField, PDFField, PasswordField, PhoneField, SelectField, SubmitButton, SwitchField, VideoField } from '@components/index';

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
    video: "",
    option: "",
    multioption: ""
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
              <div className='mb-4'>
                <Dialog 
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
              </div>
              <div className='flex justify-between space-x-8'>
                <div className='basis-10/12'>
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
                  <SelectField
                    name="option"
                    label="Select an option"
                    options={[
                      { id: '1', name: {ar: "أختيار 1", en: 'Option 1'} },
                      { id: '2', name: {ar: "أختيار 2", en: 'Option 2'} },
                      { id: '3', name: {ar: "أختيار 3", en: 'Option 3'} },
                    ]}
                    keyValue="id"
                    title="name"
                  />
                  <MultiSelectField
                    name="multioption"
                    label="Select an option"
                    options={[
                      { id: '1', name: {ar: "أختيار 1", en: 'Option 1'} },
                      { id: '2', name: {ar: "أختيار 2", en: 'Option 2'} },
                      { id: '3', name: {ar: "أختيار 3", en: 'Option 3'} },
                    ]}
                    keyValue="id"
                    title="name"
                  />

                  <SwitchField
                    name="toogle"
                    label="Switch Field"
                  />
                </div>
                <div className='basis-2/12'>
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
              </div>
              <div className='my-4'>
                <SubmitButton />
              </div>
              
            </Form>
          )}
        </Formik>
      }
    />
  )
}

export default Details