import React from 'react';
import * as yup from 'yup';
import Form from '../../components/Form';
import InputPassword from '../../components/InputPassword';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { createStyles, toRem, useDir } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';


const passwordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>])+).{8,}$/;
const passwordErrorMessage = 'The password should have 8 characters, lower and upper case, numbers and special characters.';
const repeatPasswordErrorMessage = 'Passwords don\'t match';

const validationSchema = yup.object().shape({
  password: yup.string().matches(passwordRegEx, passwordErrorMessage).required('Password is required'),
  repeatPassword: yup.string().oneOf([yup.ref('password')], repeatPasswordErrorMessage),
});

const CreatePassword = () => {
  const dir = useDir();
  const classes = useStyles()({ dir });
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.createPassword}>
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
            Create new password
          </Text>
          <Form
            className={classes.form}
            validationSchema={validationSchema}
            onChange={(formData, { isValid }) => {
              setDisabled(!isValid)
            }}
          >
            <InputPassword
              variant="floatingLabel"
              fullWidth
              name="password"
              autoComplete="new-password"
              label="Create password"
              placeholder="Type your password here"
              hint={passwordErrorMessage}
              className={classes.passwordInput}
            />
            <InputPassword
              variant="floatingLabel"
              fullWidth
              name="repeatPassword"
              autoComplete="new-password"
              label="Repeat Password"
              placeholder="Type your password here"
              className={classes.repeatPasswordInput}
            />
            <Button
              fullWidth
              type="submit"
              shape="circle"
              disabled={disabled}
              className={classes.submitButton}
            >
              Confirm
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreatePassword;

interface IUseStyles {
  dir: string;
}

const useStyles = () => createStyles<any, IUseStyles>((theme) => ({
  createPassword: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: `${theme.spacing[48]} 0 ${theme.spacing[80]}`,
    boxSizing: 'border-box',
    '*, *:after, *:before': {
      boxSizing: 'inherit',
    }
  },
  logoWrapper: ({ dir }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: theme.spacing[64],
    [dir === 'rtl' ? 'paddingLeft' : 'paddingRight']: theme.spacing[80],
    boxSizing: 'border-box',
  }),
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
    marginBottom: theme.spacing[48],
    color: theme.colors.text.headline,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  passwordInput: {
    position: 'relative',
    marginBottom: theme.spacing[80],
    ...hintAndErrorStyles,
  },
  repeatPasswordInput: {
    position: 'relative',
    marginBottom: theme.spacing[64],
    ...hintAndErrorStyles,
  },
  submitButton: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    createPassword: {
      height: '100vh',
      padding: [theme.spacing[48], theme.spacing[24], theme.spacing[96]],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: theme.spacing[48],
    },
    title: {
      marginBottom: theme.spacing[32],
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
    passwordInput: {
      marginBottom: theme.spacing[80],
    },
    repeatPasswordInput: {
      marginBottom: theme.spacing[12],
    },
    submitButton: {
      marginTop: 'auto',
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
