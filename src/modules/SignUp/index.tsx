import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import Text from '../../components/Text';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing['16'],
  },
  description: {
    marginBottom: toRem(35),
    color: theme.colors.text.secondary,
  },
  row: {
    marginBottom: toRem(44),
  },
  formContainer: {
    margin: toRem(16),
    maxWidth: toRem(560),
    width: '100%',
  },
  button: {
    maxWidth: toRem(351),
    margin: [0, 'auto']
  },
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  logoWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: toRem(37),
    paddingRight: toRem(77),
    boxSizing: 'border-box',
  },
  '@media (max-width: 800px)': {
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
    },
  }
}));

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  repeatPassword: yup.string().oneOf([yup.ref('password')]),
});

const SignUp = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoWrapper}><DemoLogo /></div>
      <div className={classes.screen}>
        <div className={classes.formContainer}>
          <Text variant="body2" weight="semiBold" className={classes.title}>Signup</Text>
          <br/>
          <Text variant="body2" className={classes.description}>Add your email and create a secure password, following the criteria:</Text>
          <Form validationSchema={validationSchema} onChange={(_, { isValid }) => setDisabled(!isValid)}>
            <Input name="email" fullWidth label="Email" placeholder="you@email.com" className={classes.row}/>
            <InputPassword name="password" autoComplete="new-password" fullWidth label="Create password" placeholder="Type your password here" hint="The password should have 8 characters, lower and upper case, numbers and special characters." className={classes.row}/>
            <InputPassword name="repeatPassword" autoComplete="new-password" fullWidth label="Repeat Password" placeholder="Type your password here" hint="This is a hint text to help user." className={classes.row}/>
            <Button type="submit" disabled={disabled} fullWidth shape="circle" className={classes.button}>Create  Account</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
