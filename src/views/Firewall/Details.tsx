import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AutoCompleteInput, ChipsField, DatePickerField, DetailsCard, Dialog, ImageField, InputField, MultiSelectField, PDFField, PasswordField, PhoneField, SelectField, SubmitButton, SwitchField, UIBlocker, VideoField } from '@components/index';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

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
    multioption: "",
    ips: [],
    autoCompleteValue: ""
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [loading, setloading] = useState(false)

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleConfirmAction = () => {
    console.log('Confirmed action');
    handleCloseDialog();
  };

  return (
    <UIBlocker blocking={loading}>
      <DetailsCard 
        title='Create Rule'
        body={
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
                setloading(prev => !prev)
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
                    <AutoCompleteInput
                      label="Autocomplete"
                      name="autoCompleteValue"
                      options={options}
                      optionLabel="label"
                      callBack={(query) => console.log(query)}
                    />
                    <ChipsField
                      name='ips'
                      label='IPs'
                      placeholder='write IPs'
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
    </UIBlocker>
  )
}

export default Details