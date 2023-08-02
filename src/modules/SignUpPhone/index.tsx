import React from 'react';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Text from '../../components/Text';
import TextLink from '../../components/TextLink';
import CheckBox from '../../components/CheckBox';
import { createStyles, toRem, useDir } from '../../components/Theme';
import DemoLogo from '../../storybook/preview/DemoLogo';
import * as yup from 'yup';

const errorMessage = 'Phone number should contain 13 digits';

const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .length(16, errorMessage)
    .required('Phone number is required'),
  dataPrivacy: yup.bool().oneOf([true], 'Field must be checked').required(),
});

const SignUpPhone = () => {
  const dir = useDir();
  const classes = useStyles()({ dir });
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
          <Text variant="body2" align="center" className={classes.description}>
            Please insert your phone number in order to start:
          </Text>
          <Form
            className={classes.form}
            validationSchema={validationSchema}
            onChange={(formData, { isValid }) => {
              setDisabled(!isValid);
            }}
          >
            <Input
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
              label={
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
              }
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
            <Button fullWidth type="button" shape="circle" variant="ghost">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPhone;

interface IUseStyles {
  dir: string;
}

const useStyles = () =>
  createStyles<any, IUseStyles>((theme) => ({
    signUpPhone: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: `${theme.spacing[48]} 0 ${theme.spacing[80]}`,
      boxSizing: 'border-box',
      '*, *:after, *:before': {
        boxSizing: 'inherit',
      },
    },
    logoWrapper: ({ dir }) => ({
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginBottom: theme.spacing[48],
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
      marginBottom: theme.spacing[24],
      color: theme.colors.text.headline,
    },
    description: {
      width: '100%',
      marginBottom: theme.spacing[64],
      color: theme.colors.neutralGray.main500,
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    phoneInput: {
      marginBottom: theme.spacing[32],
      position: 'relative',
      ...hintAndErrorStyles,
    },
    checkbox: {
      marginBottom: theme.spacing[64],
      position: 'relative',
      ...hintAndErrorStyles,
    },
    checkboxLabel: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing[4],
    },
    textLink: {
      margin: `0 ${theme.spacing[4]}`,
    },
    submitButton: {
      marginBottom: theme.spacing[24],
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      signUpPhone: {
        height: '100vh',
        padding: [theme.spacing[48], theme.spacing[24], theme.spacing[64]],
      },
      logoWrapper: {
        justifyContent: 'center',
        paddingRight: 0,
        marginBottom: theme.spacing[80],
      },
      title: {
        marginBottom: theme.spacing[16],
        fontSize: toRem(22),
        lineHeight: toRem(28),
        textAlign: 'left !important',
      },
      description: {
        marginBottom: theme.spacing[48],
        textAlign: 'left !important',
      },
      formContainer: {
        maxWidth: '100%',
      },
      phoneInput: {
        marginBottom: theme.spacing[40],
      },
      checkbox: {
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
  },
};
