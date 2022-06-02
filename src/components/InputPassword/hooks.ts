import React, { useState } from 'react';

export interface IValidationItemProps {
  id: string,
  label: string,
  rule: RegExp,
}

interface IValidationItemLocal extends IValidationItemProps {
  matched?: boolean,
}

interface IProps {
  validationScheme?: IValidationItemProps[],
  value?: string,
}

export const usePasswordValidation = (props: IProps) => {
  const { validationScheme, value } = props;

  const validate = (password: string): IValidationItemLocal[] => {
    if (validationScheme) {
      return validationScheme.map((item) => ({
        ...item,
        matched: !!password.match(item.rule),
      }));
    }
    return [];
  };

  const [scheme, setScheme] = useState<IValidationItemLocal[]>(validate(value || ''));

  const onInputChange = (e: React.BaseSyntheticEvent) => {
    !!validationScheme && setScheme(validate(e.target.value))
  }

  return {
    scheme,
    onInputChange
  }
}
