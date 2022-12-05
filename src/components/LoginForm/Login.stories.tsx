import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import { createStyles } from '../Theme/index';
import { ITheme } from '../Theme/types';
import { buildExcludeArgTypes } from '../../storybook/utils';
import LoginForm from './index';
import * as yup from 'yup';


export default {
  title: 'Modules/Login',
  component: LoginForm,
  parameters: {
    pkg,
  },
  argTypes: buildExcludeArgTypes([]),
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => {
  const classes = useStyles();
  const onSubmit = (data: any) => {
    console.log('onSubmit', data);
  };
  return (
    <LoginForm
      className={classes.form}
      title="Login"
      inputs={[{
        label: 'Login',
        name: 'login',
      }, {
        label: 'Password',
        name: 'password',
      }]}
      validationSchema={yup.object({
        login: yup.string().email().required(),
        password: yup.string().required(),
      })}
      forgotPassword={{
        link: '?path=/story/components-login--login-module',
        text: 'Forgot password?',
      }}
      onSubmit={onSubmit}
    />
  );
}

export const Login = Template.bind({});

const useStyles = createStyles((theme: ITheme) => ({
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 320,
    padding: 20,
    backgroundColor: '#eee',
    '& [class*="inputRoot"]': {
      marginBottom: 20,
    },
    '& [class*="textLink"]': {
      marginBottom: 20,
      alignSelf: 'flex-end',
    },
  },
}))
