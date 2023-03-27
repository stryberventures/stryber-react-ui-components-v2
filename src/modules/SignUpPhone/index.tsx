import React from 'react';
import Form from '../../components/Form';
import NumberInput from '../../components/NumberInput';
import Button from '../../components/Button';
import Text from '../../components/Text';
import TextLink from '../../components/TextLink';
import CheckBox from '../../components/CheckBox';
import { createStyles, toRem } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';


const errorMessage = '';

const validationSchema = yup.object().shape({
  phone: yup.string().length(16, errorMessage).required('Phone number is required'),
  dataPrivacy: yup.bool().oneOf([true], 'Field must be checked').required(),
});

const SignUpPhone = () => {
  const classes = useStyles();
  const [disabled, setDisabled] = React.useState(true);
  return (
    <div className={classes.signUpPhone}>
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
            Please insert your phone number in order to start:
          </Text>
          <Form
            className={classes.form}
            validationSchema={validationSchema}
            onChange={(formData, { isValid }) => {
              setDisabled(!isValid)
            }}
          >
            <NumberInput
              variant="floatingLabel"
              fullWidth
              name="phone"
              label="Phone Number"
              mask="+XX XXX XXXXXXXX"
              placeholder="+XX XXX XXXXXXXX"
              className={classes.phoneInput}
            />
            <CheckBox
              className={classes.checkbox}
              name="dataPrivacy"
              label={(
                <div className={classes.checkboxLabel}>
                  <Text>I accept the</Text>
                  <TextLink
                    target="_blank"
                    href={'/terms-and-conditions'}
                    className={classes.textLink}
                  >
                    Terms and Conditions
                  </TextLink>
                  <Text>and</Text>
                  <TextLink
                    target="_blank"
                    href={'/privacy-policy'}
                    className={classes.textLink}
                  >
                    Data Policy
                  </TextLink>
                </div>
              )}
            />
            <Button
              fullWidth
              type="submit"
              shape="circle"
              disabled={disabled}
              className={classes.submitButton}
            >
              Next
            </Button>
            <Button
              fullWidth
              type="button"
              shape="circle"
              variant="ghost"
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPhone;

const useStyles = createStyles((theme) => ({
  signUpPhone: {
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
    marginBottom: toRem(56),
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
    marginBottom: toRem(24),
    color: theme.colors.text.headline,
  },
  description: {
    width: '100%',
    marginBottom: toRem(68),
    color: theme.colors.neutralGray.main500,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  phoneInput: {
    marginBottom: toRem(36),
    position: 'relative',
    ...hintAndErrorStyles,
  },
  checkbox: {
    marginBottom: toRem(62),
    position: 'relative',
    ...hintAndErrorStyles,
  },
  checkboxLabel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: toRem(4),
  },
  textLink: {
    margin: `0 ${toRem(4)}`,
  },
  submitButton: {
    marginBottom: toRem(20),
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    signUpPhone: {
      padding: [toRem(48), toRem(24), toRem(70)],
    },
    logoWrapper: {
      justifyContent: 'center',
      paddingRight: 0,
      marginBottom: toRem(74),
    },
    title: {
      marginBottom: toRem(16),
      lineHeight: toRem(28),
      textAlign: 'left !important',
    },
    description: {
      marginBottom: toRem(54),
      textAlign: 'left !important',
    },
    formContainer: {
      maxWidth: '100%',
    },
    phoneInput: {
      marginBottom: toRem(44),
    },
    checkbox: {
      marginBottom: toRem(12),
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
