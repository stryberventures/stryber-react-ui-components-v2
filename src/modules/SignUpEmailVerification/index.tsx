import React, { useEffect, useState } from 'react';
import { createStyles, toRem } from '../../components/Theme';
import Text from '../../components/Text';
import Form from '../../components/Form';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';


export interface IEmailVerificationProps {
  email: string;
}

const validationSchema = yup.object().shape({
  code: yup.string().length(6, 'Code must have 6 digits').required('Code is required'),
});

const MINUTES_VALID = 10;
const RESEND_CODE_IN_SECONDS = 30;

const EmailVerification = ({ email = '', }: IEmailVerificationProps) => {
  const classes = useStyles();
  const [disabledSubmit, setDisabledSubmit] = useState(true);
  const [disabledResendCode, setDisabledResendCode] = useState(false);
  const [resendCodeIn, setResendCodeIn] = useState<number>(0);
  function requestCode () {
    setDisabledResendCode(true);
    setResendCodeIn(RESEND_CODE_IN_SECONDS);
  }
  function updateResendCodeIn () {
    setResendCodeIn((prevState) => prevState - 1);
  }
  useEffect(
    () => {
      let interval: NodeJS.Timer | undefined = undefined;
      if (disabledResendCode) {
        interval = setInterval(updateResendCodeIn, 1000)
      }
      if (!!interval && !disabledResendCode) {
        clearInterval(interval);
      }
      return () => {
        !!interval && clearInterval(interval);
      }
    },
    [disabledResendCode]
  );
  useEffect(() => { if (resendCodeIn == 0) setDisabledResendCode(false); }, [resendCodeIn]);
  return (
    <div className={classes.emailVerification}>
      <div className={classes.logoWrapper}>
        <DemoLogo />
      </div>
      <div className={classes.formWrapper}>
        <Text
          variant="h4"
          component="h4"
          weight="bold"
          align="center"
          className={classes.title}
        >
          Email Verification
        </Text>
        <Text
          variant="body2"
          align="center"
          className={classes.description}
        >
          {`Please enter the 6-digit verification code that was sent to ${email}. The code is valid for ${MINUTES_VALID} min.`}
        </Text>
        <Form
          className={classes.form}
          validationSchema={validationSchema}
          onChange={(formData, { isValid }) => {
            setDisabledSubmit(!isValid)
          }}
        >
          <NumberInput
            fullWidth
            controlled={false}
            className={classes.codeInput}
            name="code"
            label="Insert Verification Code"
          />
          <Button
            type="button"
            className={classes.requestCodeButton}
            variant="ghost"
            size="small"
            disabled={disabledResendCode}
            onClick={requestCode}
          >
            {`Send code again ${resendCodeIn ? `in ${resendCodeIn} seconds` : ''}`}
          </Button>
          <Button
            fullWidth
            className={classes.submitButton}
            type="submit"
            shape="circle"
            disabled={disabledSubmit}
          >
            Next
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EmailVerification;

const useStyles = createStyles((theme) => ({
  emailVerification: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
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
    marginBottom: toRem(68),
    paddingRight: toRem(78),
    boxSizing: 'border-box',
  },
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: toRem(560),
  },
  title: {
    width: '100%',
    marginBottom: toRem(24),
    color: theme.colors.text.headline,
  },
  description: {
    width: '100%',
    marginBottom: toRem(26),
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  codeInput: {
    marginBottom: toRem(24),
  },
  requestCodeButton: {
    alignSelf: 'flex-start',
    marginBottom: toRem(52),
  },
  submitButton: {},
  '@media (max-width: 800px)': {
    emailVerification: {
      height: '100vh',
      padding: [toRem(40), toRem(24), toRem(105)],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: toRem(90),
    },
    formWrapper: {
      height: '100%',
      alignItems: 'flex-start',
    },
    title: {
      marginBottom: toRem(16),
      textAlign: 'left !important',
    },
    description: {
      textAlign: 'left !important',
      marginBottom: toRem(30),
    },
    form: {
      height: '100%',
    },
    codeInput: {
      marginBottom: toRem(34),
    },
    requestCodeButton: {
      alignSelf: 'center',
      marginBottom: toRem(12),
    },
    submitButton: {
      marginTop: 'auto',
      marginBottom: 0
    },
  },
}));
