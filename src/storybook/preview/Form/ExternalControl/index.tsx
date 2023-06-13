import React, { useRef } from 'react';
import Input from '../../../../components/Input';
import Form from '../../../../components/Form';
import * as yup from 'yup';
import { IFormRef } from '../../../../components/Form/types';
import { defaultTheme } from '../../../../components/Theme';

const FormExternalControl = () => {
  const formRef = useRef<IFormRef>(null);

  const handleSubmit = () => {
    formRef.current?.submit();
  };

  const handleSetError = () => {
    formRef.current?.setErrors({ email: 'This email is already taken' });
  };

  const handleResetForm = () => {
    formRef.current?.reset();
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(formData: any) => console.log('onSubmit external', formData)}
      onError={(errorData: any, formData: any) =>
        console.log('onError external', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <h2
        style={{
          fontFamily: 'Inter',
          color: defaultTheme.colors.primary.main500,
        }}
      >
        Form external controls from ref
      </h2>
      <Input name="email" placeholder="Email" label="Email" />
      <h1> </h1>
      <Input name="password" placeholder="Password" label="Password" />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <div onClick={handleSubmit}>Submit</div>
        <div onClick={handleResetForm}>Reset</div>
        <div onClick={handleSetError}>Set error</div>
      </div>
    </Form>
  );
};

export default FormExternalControl;

export const FormExternalControlCode = `
const FormExternalControl = () => {
  const formRef = useRef<IFormRef>(null);

  const handleSubmit = () => {
    formRef.current?.submit();
  };

  const handleSetError = () => {
    formRef.current?.setErrors({ email: 'This email is already taken' });
  };

  const handleResetForm = () => {
    formRef.current?.reset();
  };

  return (
    <Form
      ref={formRef}
      onSubmit={(formData: any) => console.log('onSubmit external', formData)}
      onError={(errorData: any, formData: any) =>
        console.log('onError external', errorData, formData)
      }
      validationSchema={yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })}
    >
      <h2 style={{ fontFamily: 'Inter', color: defaultTheme.colors.primary.main500 }}>Form external controls from ref</h2>
      <Input name="email" placeholder="Email" label="Email" />
      <h1> </h1>
      <Input name="password" placeholder="Password" label="Password" />
      <h1> </h1>
      <div style={{ display: 'flex', gap: 20 }}>
        <div onClick={handleSubmit}>
          Submit
        </div>
        <div onClick={handleResetForm}>
          Reset
        </div>
        <div onClick={handleSetError}>
          Set error
        </div>
      </div>
    </Form>
  );
};
`;
