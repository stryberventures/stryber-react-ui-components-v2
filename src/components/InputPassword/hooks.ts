import React, { useState } from 'react';
import { IInputPassword } from './index';

export interface IValidationItemProps {
  label: string,
  rule: RegExp,
}

interface IValidationItemLocal extends IValidationItemProps {
  matched?: boolean,
}

interface IProps extends Pick<IInputPassword, 'onValidationChange' | 'validationSchema'> {
  value?: string,
}

export const usePasswordValidation = (props: IProps) => {
  const { validationSchema, value, onValidationChange } = props;

  const validate = (password: string): IValidationItemLocal[] => {
    if (validationSchema) {
      return validationSchema.map((item) => ({
        ...item,
        matched: !!password.match(item.rule),
      }));
    }
    return [];
  };

  const [schema, setSchema] = useState<IValidationItemLocal[]>(validate(value || ''));

  const onInputChange = (e: React.BaseSyntheticEvent) => {
    const validatedSchema = validate(e.target.value);
    !!validationSchema && setSchema(validatedSchema);
    onValidationChange && onValidationChange(validatedSchema.every(({ matched }) => matched));
  }

  return {
    schema,
    onInputChange
  }
}
