import React from 'react';

export interface IFormContext {
  updateFormValue: (name: string, data: any, init?: boolean) => void;
  updateFormTouched: (name: string, data: any) => void;
  unsetFormValue: (name: any) => void,
  formValues: any;
  formErrors: any;
  formTouched: any;
  initialValues?: any;
  loading: boolean;
  handleReset: () => void;
  handleSubmit: () => void;
}

export interface IFormProps {
  onSubmit?: (formData: any, formActions: IFormActions) => void;
  onReset?: (formData: any) => void;
  onError?: (errorData: any, formData: any) => void;
  onChange?: (newFormData: any, formActions: IFormActions) => void;
  onValidate?: (newFormData: any) => any;
  onValidateAsync?: (newFormData: any) => Promise<any>;
  children: React.ReactNode;
  initialValues?: any;
  validationSchema?: any;
  loading?: any;
}

export interface IFormActions {
  setError: (errors: any) => void;
  resetForm: () => void;
  submitForm: () => void;
  isFormValid: boolean;
}

export interface IFormRef extends IFormActions {}
