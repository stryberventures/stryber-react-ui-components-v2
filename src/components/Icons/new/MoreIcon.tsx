import { createCommonIcon } from '../utils';

const iconVariants = {
  vertical: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20C11.6667 20 11.3834 19.8833 11.15 19.65C10.9167 19.4167 10.8 19.1333 10.8 18.8C10.8 18.4667 10.9167 18.1833 11.15 17.95C11.3834 17.7167 11.6667 17.6 12 17.6C12.3334 17.6 12.6167 17.7167 12.85 17.95C13.0834 18.1833 13.2 18.4667 13.2 18.8C13.2 19.1333 13.0834 19.4167 12.85 19.65C12.6167 19.8833 12.3334 20 12 20ZM12 13.2C11.6667 13.2 11.3834 13.0833 11.15 12.85C10.9167 12.6167 10.8 12.3333 10.8 12C10.8 11.6667 10.9167 11.3833 11.15 11.15C11.3834 10.9167 11.6667 10.8 12 10.8C12.3334 10.8 12.6167 10.9167 12.85 11.15C13.0834 11.3833 13.2 11.6667 13.2 12C13.2 12.3333 13.0834 12.6167 12.85 12.85C12.6167 13.0833 12.3334 13.2 12 13.2ZM12 6.4C11.6667 6.4 11.3834 6.28333 11.15 6.05C10.9167 5.81667 10.8 5.53333 10.8 5.2C10.8 4.86667 10.9167 4.58333 11.15 4.35C11.3834 4.11667 11.6667 4 12 4C12.3334 4 12.6167 4.11667 12.85 4.35C13.0834 4.58333 13.2 4.86667 13.2 5.2C13.2 5.53333 13.0834 5.81667 12.85 6.05C12.6167 6.28333 12.3334 6.4 12 6.4Z" fill="black"/>
</svg>`,
  horizontal: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.2 13.2C4.86667 13.2 4.58333 13.0834 4.35 12.85C4.11667 12.6167 4 12.3334 4 12C4 11.6667 4.11667 11.3834 4.35 11.15C4.58333 10.9167 4.86667 10.8 5.2 10.8C5.53333 10.8 5.81667 10.9167 6.05 11.15C6.28333 11.3834 6.4 11.6667 6.4 12C6.4 12.3334 6.28333 12.6167 6.05 12.85C5.81667 13.0834 5.53333 13.2 5.2 13.2ZM12 13.2C11.6667 13.2 11.3833 13.0834 11.15 12.85C10.9167 12.6167 10.8 12.3334 10.8 12C10.8 11.6667 10.9167 11.3834 11.15 11.15C11.3833 10.9167 11.6667 10.8 12 10.8C12.3333 10.8 12.6167 10.9167 12.85 11.15C13.0833 11.3834 13.2 11.6667 13.2 12C13.2 12.3334 13.0833 12.6167 12.85 12.85C12.6167 13.0834 12.3333 13.2 12 13.2ZM18.8 13.2C18.4667 13.2 18.1833 13.0834 17.95 12.85C17.7167 12.6167 17.6 12.3334 17.6 12C17.6 11.6667 17.7167 11.3834 17.95 11.15C18.1833 10.9167 18.4667 10.8 18.8 10.8C19.1333 10.8 19.4167 10.9167 19.65 11.15C19.8833 11.3834 20 11.6667 20 12C20 12.3334 19.8833 12.6167 19.65 12.85C19.4167 13.0834 19.1333 13.2 18.8 13.2Z" fill="black"/>
</svg>`,
};

export default createCommonIcon<keyof typeof iconVariants>(
  'MoreIcon',
  iconVariants,
);
