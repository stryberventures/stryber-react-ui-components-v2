import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Form from './index';
import pkg from './package.json';
import FormDisabledSubmitButton, { FormDisabledSubmitButtonCode } from '../../storybook/preview/Form/DisabledSubmitButton';
import FormExternalFormControl, { FormExternalControlCode } from '../../storybook/preview/Form/ExternalControl';
import FormValidation, { FormValidationCode } from '../../storybook/preview/Form/Validation';
import FormInitialValues, { FormInitialValuesCode } from '../../storybook/preview/Form/InitialValues';
import FormSetErrorOnSubmit, { FormSetErrorOnSubmitCode } from '../../storybook/preview/Form/SetErrorOnSubmit';

export default {
  title: 'Components/Form',
  component: Form,
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Form>;

export const InitialValues = () => <FormInitialValues />;
InitialValues.parameters = {
  docs: {
    source: {
      code: FormInitialValuesCode
    },
  },
};

export const Validation = () => <FormValidation />;
Validation.parameters = {
  docs: {
    source: {
      code: FormValidationCode
    },
  },
};

export const ErrorOnSubmit = () => <FormSetErrorOnSubmit />;
ErrorOnSubmit.parameters = {
  docs: {
    source: {
      code: FormSetErrorOnSubmitCode,
    },
  },
};

export const DisableSubmitButton = () => <FormDisabledSubmitButton />;
DisableSubmitButton.parameters = {
  docs: {
    source: {
      code: FormDisabledSubmitButtonCode,
    },
  },
};

export const ExternalControl = () => <FormExternalFormControl />;
ExternalControl.parameters = {
  docs: {
    source: {
      code: FormExternalControlCode,
    },
  },
};
