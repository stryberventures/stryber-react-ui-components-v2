import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';
import toRem from '../../utils/toRem';
import { createStyles } from '../../components/Theme';

const useStyles = createStyles((theme) => ({
  row: {
    marginBottom: toRem(20),
  },
  form: {
    padding: toRem(20),
    border: `1px solid ${theme.colors.neutralGray.light200}`,
    borderRadius: 5,
  },
  screen: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.screen}>
      <Form className={classes.form}>
        <Input label="Email" placeholder="enter email" className={classes.row}/>
        <InputPassword label="Password" placeholder="enter password" className={classes.row}/>
        <CheckBox label="Remember me" className={classes.row}/>
        <Button fullWidth>Login</Button>
      </Form>
    </div>
  );
}

export default Login;
