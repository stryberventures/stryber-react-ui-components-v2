interface IPalette {
  main: string,
  dark: string,
  light: string,
  contrast: string,
}

export interface ITheme {
  primary: IPalette,
  secondary: IPalette,
  highlight: string,
  font: string,
}
