import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Text from '../../components/Text';
import TextLink from '../../components/TextLink';
import Button from '../../components/Button';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';


const emailRegEx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const emailErrorMessage = 'Email incorrect';

const validationSchema = yup.object().shape({
  email: yup.string().matches(emailRegEx, emailErrorMessage).required('Email is required'),
});

const ForgotPasswordEmail = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.forgotPasswordEmail}>
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
            Reset Password
          </Text>
          <Text
            variant="body2"
            align="center"
            className={classes.description}
          >
            Enter the email address associated with your
            account and we’ll send an email with instructions
            to reset your password in no time!
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
            <Button
              fullWidth
              type="submit"
              shape="circle"
              disabled={disabled}
              className={classes.submitButton}
            >
              Send password instructions
            </Button>
            <Button
              fullWidth
              type="button"
              shape="circle"
              variant="ghost"
              disabled={disabled}
              className={classes.loginButton}
            >
              Login
            </Button>
            <TextLink
              href={'#'}
              className={classes.textLink}
            >
              New user? Register here
            </TextLink>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;

const useStyles = createStyles((theme) => ({
  forgotPasswordEmail: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: `${theme.spacing[48]} 0 ${theme.spacing[80]}`,
    boxSizing: 'border-box',
    '*, *:after, *:before': {
      boxSizing: 'inherit',
    }
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: theme.spacing[64],
    paddingRight: theme.spacing[80],
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
    marginBottom: theme.spacing[24],
    color: theme.colors.text.headline,
  },
  description: {
    width: '100%',
    marginBottom: theme.spacing[24],
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  emailInput: {
    position: 'relative',
    marginBottom: theme.spacing[96],
    ...hintAndErrorStyles,
  },
  submitButton: {
    marginBottom: theme.spacing[24],
  },
  loginButton: {
    marginBottom: theme.spacing[80],
  },
  textLink: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    forgotPasswordEmail: {
      height: '100vh',
      padding: [theme.spacing[48], theme.spacing[24], theme.spacing[64]],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: theme.spacing[48],
    },
    title: {
      marginBottom: theme.spacing[12],
      fontSize: toRem(22),
      lineHeight: toRem(28),
      textAlign: 'left !important',
    },
    description: {
      marginBottom: theme.spacing[32],
      textAlign: 'left !important',
    },
    formContainer: {
      maxWidth: '100%',
    },
    emailInput: {
      marginBottom: theme.spacing[32],
    },
    submitButton: {
      marginTop: 'auto',
      marginBottom: theme.spacing[24],
    },
    loginButton: {
      marginBottom: theme.spacing[40],
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
