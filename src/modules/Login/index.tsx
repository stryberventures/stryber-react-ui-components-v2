import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import Text from '../../components/Text';
import TextLink from '../../components/TextLink';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';

const useStyles = createStyles((theme) => ({
  title: {
    marginBottom: theme.spacing['48'],
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
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    marginTop: toRem(17),
    marginBottom: toRem(56),
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
    },
  }
}));

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const Login = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.wrapper}>
      <div className={classes.logoWrapper}><DemoLogo /></div>
      <div className={classes.screen}>
        <div className={classes.formContainer}>
          <Text variant="body2" weight="semiBold" className={classes.title}>Account Login</Text>
          <Form validationSchema={validationSchema} onChange={(_, { isValid }) => setDisabled(!isValid)}>
            <Input name="email" fullWidth label="Email" placeholder="you@email.com" className={classes.row}/>
            <InputPassword name="password" fullWidth label="Password" placeholder="Type your password here" className={classes.row}/>
            <CheckBox name="rememberMe" label="Remember me" className={classes.row}/>
            <Button type="submit" disabled={disabled} fullWidth shape="circle" className={classes.button}>Login</Button>
          </Form>
          <div className={classes.linkWrapper}>
            <TextLink className={classes.link} href="#">Forgot Password?</TextLink>
            <br/>
            <TextLink href='#'>New user? Register here</TextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
