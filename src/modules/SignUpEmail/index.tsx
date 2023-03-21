import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';


const emailRegEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const emailErrorMessage = 'Email incorrect';
const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const passwordErrorMessage = 'The password should have 8 characters, lower and upper case, numbers and special characters.';
const repeatPasswordErrorMessage = 'Passwords don\'t match';

const validationSchema = yup.object().shape({
  email: yup.string().matches(emailRegEx, emailErrorMessage).required('Email is required'),
  password: yup.string().matches(passwordRegEx, passwordErrorMessage).required('Password is required'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], repeatPasswordErrorMessage),
});

const SignUp = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.signUpEmail}>
      <div className={classes.logoWrapper}>
        <DemoLogo />
      </div>
      <div className={classes.screen}>
        <div className={classes.formContainer}>
          <Text
            variant="h4"
            component="h4"
            weight="bold"
            align="center"
            className={classes.title}
          >
            Signup
          </Text>
          <Text
            variant="body2"
            align="center"
            className={classes.description}
          >
            Add your email and create a secure password, following the criteria:
          </Text>
          <Form
            className={classes.form}
            validationSchema={validationSchema}
            onChange={(formData, { isValid }) => {
              setDisabled(!isValid)
            }}
          >
            <Input
              fullWidth
              name="email"
              label="Email"
              placeholder="you@email.com"
              className={classes.emailInput}
            />
            <InputPassword
              fullWidth
              name="password"
              autoComplete="new-password"
              label="Create password"
              placeholder="Type your password here"
              hint={passwordErrorMessage}
              className={classes.passwordInput}
            />
            <InputPassword
              fullWidth
              name="repeatPassword"
              autoComplete="new-password"
              label="Repeat Password"
              placeholder="Type your password here"
              hint="This is a hint text to help user."
              className={classes.repeatPasswordInput}
            />
            <Button
              fullWidth
              type="submit"
              shape="circle"
              disabled={disabled}
              className={classes.submitButton}
            >
              Create  Account
            </Button>
            <Button
              fullWidth
              type="button"
              shape="circle"
              variant="ghost"
              size="large"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

const useStyles = createStyles((theme) => ({
  signUpEmail: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    paddingTop: toRem(48),
    boxSizing: 'border-box',
    '*, *:after, *:before': {
      boxSizing: 'inherit',
    }
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: toRem(62),
    paddingRight: toRem(78),
    boxSizing: 'border-box',
  },
  screen: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: toRem(560),
    width: '100%',
    height: '100%',
  },
  title: {
    width: '100%',
    marginBottom: toRem(22),
    color: theme.colors.text.headline,
  },
  description: {
    width: '100%',
    marginBottom: toRem(30),
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  emailInput: {
    marginBottom: toRem(44),
  },
  passwordInput: {
    marginBottom: toRem(16),
  },
  repeatPasswordInput: {
    marginBottom: toRem(44),
  },
  submitButton: {
    marginBottom: toRem(12),
  },
  '@media (max-width: 800px)': {
    signUpEmail: {
      padding: [toRem(48), toRem(24), toRem(70)],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: toRem(70),
    },
    title: {
      marginBottom: toRem(12),
      fontSize: toRem(22),
      lineHeight: toRem(28),
      textAlign: 'left !important',
    },
    description: {
      marginBottom: toRem(32),
      textAlign: 'left !important',
    },
    formContainer: {
      maxWidth: '100%',
    },
    emailInput: {
      marginBottom: toRem(24),
    },
    passwordInput: {
      marginBottom: toRem(32),
    },
    repeatPasswordInput: {
      marginBottom: toRem(12),
    },
    submitButton: {
      marginTop: 'auto',
    },
  },
}));
