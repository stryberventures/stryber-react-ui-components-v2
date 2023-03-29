import React, { useEffect, useState } from 'react';
import { createStyles, toRem } from '../../components/Theme';
import Text from '../../components/Text';
import Form from '../../components/Form';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';

export interface IPhoneVerificationProps {
  phone: string;
}

const validationSchema = yup.object().shape({
  code: yup.string().length(6, 'Code must have 6 digits').required('Code is required'),
});

const HOURS_VALID = 24;
const RESEND_CODE_IN_SECONDS = 30;

const PhoneVerification = ({ phone = '', }: IPhoneVerificationProps) => {
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
    <div className={classes.PhoneVerification}>
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
          Phone Verification
        </Text>
        <Text
          variant="body2"
          align="center"
          className={classes.description}
        >
          {`Please enter the 6-digit verification code that was sent to ${phone}. The code is valid for ${HOURS_VALID} hours.`}
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
            label="Insert SMS Verification Code"
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

export default PhoneVerification;

const useStyles = createStyles((theme) => ({
  PhoneVerification: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginBottom: toRem(56),
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
    marginBottom: toRem(44),
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  codeInput: {
    marginBottom: toRem(124),
    position: 'relative',
    ...hintAndErrorStyles,
  },
  requestCodeButton: {
    alignSelf: 'flex-start',
    marginBottom: toRem(24),
  },
  submitButton: {},
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    PhoneVerification: {
      height: '100vh',
      padding: [toRem(48), toRem(24), toRem(105)],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: toRem(74),
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
      marginBottom: toRem(12),
    },
    requestCodeButton: {
      alignSelf: 'center',
      marginTop: 'auto',
      marginBottom: toRem(20),
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
