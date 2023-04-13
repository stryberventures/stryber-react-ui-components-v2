import React, { useEffect, useState } from 'react';
import { createStyles, toRem } from '../../components/Theme';
import Text from '../../components/Text';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';

export interface IEmailVerificationProps {
  email: string;
}

const validationSchema = yup.object().shape({
  code: yup.string().length(6, 'Code must have 6 digits').required('Code is required'),
});

const HOURS_VALID = 24;
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
          {`Please enter the 6-digit verification code that was sent to ${email}. The code is valid for ${HOURS_VALID} hours.`}
        </Text>
        <Form
          className={classes.form}
          validationSchema={validationSchema}
          onChange={(formData, { isValid }) => {
            setDisabledSubmit(!isValid)
          }}
        >
          <Input
            fullWidth
            controlled={false}
            className={classes.codeInput}
            mask="XXXXXX"
            name="code"
            label="Insert Verification Code"
            variant="floatingLabel"
          />
          <Button
            fullWidth
            type="button"
            className={classes.requestCodeButton}
            variant="ghost"
            shape="circle"
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
    marginBottom: theme.spacing[48],
    paddingRight: theme.spacing[80],
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
    marginBottom: theme.spacing[24],
    color: theme.colors.text.headline,
  },
  description: {
    width: '100%',
    marginBottom: theme.spacing[48],
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  codeInput: {
    marginBottom: toRem(120),
    position: 'relative',
    ...hintAndErrorStyles,
  },
  requestCodeButton: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing[24],
  },
  submitButton: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    emailVerification: {
      height: '100vh',
      padding: [theme.spacing[48], theme.spacing[24], theme.spacing[96]],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: theme.spacing[80],
    },
    formWrapper: {
      height: '100%',
      alignItems: 'flex-start',
    },
    title: {
      marginBottom: theme.spacing[16],
      textAlign: 'left !important',
    },
    description: {
      textAlign: 'left !important',
      marginBottom: theme.spacing[32],
    },
    form: {
      height: '100%',
    },
    codeInput: {
      marginBottom: theme.spacing[12],
    },
    requestCodeButton: {
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: theme.spacing[12],
    },
    submitButton: {
      marginBottom: 0
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
