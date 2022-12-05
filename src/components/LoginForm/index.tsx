import React from 'react';
import Form from '../Form';
import { IFormProps } from '../Form/types';
import Text from '../Text';
import Input from '../Input';
import InputPassword from '../InputPassword';
import TextLink from '../TextLink';
import Button from '../Button';
import * as yup from 'yup';


export interface ILoginForm extends Omit<IFormProps, 'children'> {
  forgotPassword?: {
    link: string,
    text: string,
  };
  inputs?: { label: string, name: string, placeholder?: string }[];
  title?: string;
  buttonText?: string;
}

const LoginForm = (props: ILoginForm) => {
  const {
    initialValues,
    inputs = [{
      label: 'Email',
      name: 'email',
    }, {
      label: 'Password',
      name: 'password',
    }],
    validationSchema = yup.object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    buttonText = 'Login',
    title,
    forgotPassword,
    className,
    onSubmit,
    ...rest
  } = props;
  
  return (
    <Form
      className={className}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...rest}
    >
      {title && (
        <Text variant={'body'}>{title}</Text>
      )}
      {inputs.map(({ label, name, placeholder }) => {
        const InputComponent = name == 'password' ? InputPassword : Input;
        return (
          <InputComponent
            key={name}
            name={name}
            label={label}
            placeholder={placeholder}
            value={initialValues?.[name]}
          />
        )
      })}
      {forgotPassword && (
        <TextLink href={forgotPassword.link}>
          {forgotPassword.text || 'Forgot password?'}
        </TextLink>
      )}
      <Button type="submit" fullWidth>
        {buttonText}
      </Button>
    </Form>
  );
};

export default LoginForm;

LoginForm.defaulProps = {
  inputs: [{
    label: 'Email',
    name: 'email',
  }, {
    label: 'Password',
    name: 'password',
  }]
}
