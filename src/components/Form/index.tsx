import React, { ForwardedRef, forwardRef, useContext, useImperativeHandle } from 'react';
import { IFormContext, IFormProps, IFormRef } from './types';

const defaultFormContextValues: IFormContext = {
  updateFormValue: () => undefined,
  updateFormTouched: () => undefined,
  unsetFormValue: () => undefined,
  loading: false,
  formValues: undefined,
  formErrors: undefined,
  formTouched: undefined,
  initialValues: undefined,
  formActions: {
    submit: () => {},
    reset: () => {},
    isValid: true,
    setErrors: () => {},
  },
};

export const FormContext: React.Context<IFormContext> =
  React.createContext(defaultFormContextValues);

const Form = forwardRef((props: IFormProps, ref: ForwardedRef<IFormRef>) => {
  const {
    children,
    onSubmit,
    onReset,
    onChange,
    onError,
    onValidate,
    onValidateAsync,
    validationSchema,
    initialValues,
    loading,
    ...rest
  } = props;

  /** State */
  const [formValues, setFormValues] = React.useState(initialValues || {});
  const [formErrors, setFormErrors] = React.useState({});
  const [formTouched, setFormTouched] = React.useState({});
  const [formSessionId, setFormSessionId] = React.useState(1);
  /** Yup validate function wrapper */
  const validate = (values: any) => {
    /** Validation schema using Yup library */
    let validationRes = {};
    if (validationSchema) {
      try {
        validationSchema.validateSync(values, { abortEarly: false });
      } catch (errors: any) {
        validationRes = errors.inner.reduce((a: any, v: any) => ({ ...a, [v.path]: v.message }), {});
      }
      setFormErrors(validationRes);

      return validationRes;
    }
    /** External validation methods */
    if (onValidate) {
      setFormErrors(() => onValidate(values));
    }
    if (onValidateAsync) {
      onValidateAsync(values)
        /** No errors from external lib */
        .then((errors: any) => setFormErrors(() => errors))
        /** Errors were caught */
        .catch((errors: any) => setFormErrors(() => errors));
    }
  };

  /** Set everything to "touched" to highlight errors on submit */
  const setAllTouched = () =>
    setFormTouched(() =>
      Object.keys(formValues).reduce(
        (acc: any, key: string) => ({ ...acc, [key]: true }),
        {},
      ),
    );

  const setFormErrorsActionWrapper = (errors: any) => {
    setAllTouched();
    setFormErrors(errors);
    onError && onError(errors, formValues);
  };
  
  const onSubmitFormWrapper = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (Object.keys(formErrors).length > 0) {
      setAllTouched();
      onError && onError(formErrors, formValues);
    } else {
      onSubmit && onSubmit(formValues, formActions);
    }
  };

  const onResetFormWrapper = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    setFormValues(() => initialValues || {});
    setFormSessionId((id) => id + 1);
    onReset && onReset(formValues);
  };

  const formActions = {
    isValid: JSON.stringify(formErrors) === '{}',
    setErrors: setFormErrorsActionWrapper,
    reset: onResetFormWrapper,
    submit: onSubmitFormWrapper,
  };

  /** Updating form values whenever a change is made within an input field */
  const updateFormValue = (name: string, value: any, init = false) => {
    /** Setting new values in state */
    setFormValues((formValues: any) => {
      const newFormValues = { ...formValues };
      newFormValues[name] = value;
      /** Validating new values */
      const validationResult = validate(newFormValues);
      const isValid = JSON.stringify(validationResult) === '{}';
      /** Sending on change callback (if it was provided) */
      !init && onChange && onChange({ ...newFormValues },
        { ...formActions, isValid }
      );

      return newFormValues;
    });
  };

  /** Updating field touched status (needed for a correct error display */
  const updateFormTouched = (name: string, touched = true) => {
    setFormTouched((formTouched: any) => {
      const newFormTouched = { ...formTouched };
      newFormTouched[name] = touched;
      setFormTouched(newFormTouched);
    });
  };

  /** Un-setting value (clearing it from the form) */
  const unsetFormValue = (name: string) => {
    updateFormValue(name, undefined);
    updateFormTouched(name, false);
  };

  useImperativeHandle(ref, () => formActions);
  
  /** Mount / unmount logic */
  React.useEffect(() => {
    /** Running first validation on mount */
    validate(formValues);
  }, []);

  return (
    <form
      { ...rest }
      onSubmit={onSubmitFormWrapper}
      onReset={onResetFormWrapper}
      key={formSessionId}
    >
      <FormContext.Provider
        value={{
          updateFormValue,
          updateFormTouched,
          unsetFormValue,
          initialValues,
          formValues,
          formErrors,
          formTouched,
          formActions,
          loading
        }}
      >
        { children }
      </FormContext.Provider>
    </form>
  );
});

Form.displayName = 'Form';

export const useFormContext = (fieldName = 'unnamed') => {
  const {
    updateFormValue,
    updateFormTouched,
    unsetFormValue,
    formValues,
    formErrors,
    formTouched,
    formActions,
  } = useContext(FormContext);
  return {
    fieldError:
      fieldName &&
      formTouched &&
      formTouched[fieldName] &&
      formErrors[fieldName],
    fieldValue: fieldName && formValues && formValues[fieldName],
    updateFormValue: formValues ? updateFormValue : () => {},
    updateFormTouched: formTouched ? updateFormTouched : () => {},
    unsetFormValue: formValues ? unsetFormValue : () => {},
    formActions
  };
};

export default Form;
