interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  error: IPalette,
  default: {
    main: string,
    light: string,
  },
  text: {
    primary: string,
    secondary: string,
    disabled: string,
    hint: string,
  }
  font: string,
}
