export const BASIC_FONT_SIZE = 16; // TODO use in html styles

export default function toRem(px: number) {
  return `${px / BASIC_FONT_SIZE}rem`;
}
