export const BASIC_FONT_SIZE = 16;

export default function toRem(px: number) {
  return `${px / BASIC_FONT_SIZE}rem`;
}
