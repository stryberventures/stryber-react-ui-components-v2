import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import TextLink from '../../components/TextLink';
import InputPassword from '../../components/InputPassword';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';


const emailRegEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const emailErrorMessage = 'Email incorrect';

const validationSchema = yup.object().shape({
  email: yup.string().matches(emailRegEx, emailErrorMessage).required('Email is required'),
  password: yup.string().required('Password is required'),
});

const LoginEmail = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.loginEmail}>
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
            Account Login
          </Text>
          <Form
            className={classes.form}
            validationSchema={validationSchema}
            onChange={(formData, { isValid }) => {
              setDisabled(!isValid)
            }}
          >
            <Input
              variant="floatingLabel"
              fullWidth
              name="email"
              label="Email"
              placeholder="you@email.com"
              className={classes.emailInput}
            />
            <InputPassword
              variant="floatingLabel"
              fullWidth
              name="password"
              autoComplete="new-password"
              label="Password"
              placeholder="Type your password here"
              className={classes.passwordInput}
            />
            <CheckBox
              name="remember"
              label="Remember me"
              className={classes.checkboxInput}
            />
            <Button
              fullWidth
              type="submit"
              shape="circle"
              disabled={disabled}
              className={classes.submitButton}
            >
              Login
            </Button>
            <TextLink
              href={'#'}
              className={classes.textLink}
            >
              Forgot Password?
            </TextLink>
            <TextLink href={'#'}>
              New user? Register here
            </TextLink>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LoginEmail;

const useStyles = createStyles((theme) => ({
  loginEmail: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: `${toRem(48)} 0 ${toRem(84)}`,
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
    marginBottom: toRem(50),
    color: theme.colors.text.headline,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  emailInput: {
    position: 'relative',
    marginBottom: toRem(50),
    ...hintAndErrorStyles,
  },
  passwordInput: {
    position: 'relative',
    marginBottom: toRem(54),
    ...hintAndErrorStyles,
  },
  checkboxInput: {
    alignSelf: 'flex-start',
    marginBottom: toRem(54),
    position: 'relative',
    ...hintAndErrorStyles,
  },
  submitButton: {
    marginBottom: toRem(40),
  },
  textLink: {
    marginBottom: toRem(44),
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    loginEmail: {
      height: '100vh',
      padding: [toRem(48), toRem(24), toRem(70)],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: toRem(56),
    },
    title: {
      fontSize: toRem(22),
      lineHeight: toRem(28),
      textAlign: 'left !important',
    },
    formContainer: {
      maxWidth: '100%',
    },
    emailInput: {
      marginBottom: toRem(52),
    },
    passwordInput: {
      marginBottom: toRem(62),
    },
    checkboxInput: {
      marginBottom: toRem(12),
    },
    submitButton: {
      marginTop: 'auto',
      marginBottom: toRem(16),
    },
    textLink: {
      marginBottom: toRem(58),
    },
  },
}));

const hintAndErrorStyles = {
  '& [class*=hint], & [class*=errorMessage]': {
    position: 'absolute',
    left: 0,
    top: '100%',
    width: '100%',
  }
}
