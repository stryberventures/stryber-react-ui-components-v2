import { createCommonIcon } from '../utils';

const iconVariants = {
  default: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.725 16.275C7.875 16.425 8.05 16.5 8.25 16.5C8.45 16.5 8.625 16.425 8.775 16.275L12 13.05L15.25 16.3C15.3833 16.4333 15.5542 16.4958 15.7625 16.4875C15.9708 16.4792 16.1417 16.4083 16.275 16.275C16.425 16.125 16.5 15.95 16.5 15.75C16.5 15.55 16.425 15.375 16.275 15.225L13.05 12L16.3 8.75C16.4333 8.61667 16.4958 8.44583 16.4875 8.2375C16.4792 8.02917 16.4083 7.85833 16.275 7.725C16.125 7.575 15.95 7.5 15.75 7.5C15.55 7.5 15.375 7.575 15.225 7.725L12 10.95L8.75 7.7C8.61667 7.56667 8.44583 7.50417 8.2375 7.5125C8.02917 7.52083 7.85833 7.59167 7.725 7.725C7.575 7.875 7.5 8.05 7.5 8.25C7.5 8.45 7.575 8.625 7.725 8.775L10.95 12L7.7 15.25C7.56667 15.3833 7.50417 15.5542 7.5125 15.7625C7.52083 15.9708 7.59167 16.1417 7.725 16.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22ZM12 20.5C14.3333 20.5 16.3333 19.6667 18 18C19.6667 16.3333 20.5 14.3333 20.5 12C20.5 9.66667 19.6667 7.66667 18 6C16.3333 4.33333 14.3333 3.5 12 3.5C9.66667 3.5 7.66667 4.33333 6 6C4.33333 7.66667 3.5 9.66667 3.5 12C3.5 14.3333 4.33333 16.3333 6 18C7.66667 19.6667 9.66667 20.5 12 20.5Z" fill="#667085"/>
</svg>`,
  filled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.725 16.275C7.875 16.425 8.05 16.5 8.25 16.5C8.45 16.5 8.625 16.425 8.775 16.275L12 13.05L15.25 16.3C15.3833 16.4333 15.5542 16.4958 15.7625 16.4875C15.9708 16.4792 16.1417 16.4083 16.275 16.275C16.425 16.125 16.5 15.95 16.5 15.75C16.5 15.55 16.425 15.375 16.275 15.225L13.05 12L16.3 8.75C16.4333 8.61667 16.4958 8.44583 16.4875 8.2375C16.4792 8.02917 16.4083 7.85833 16.275 7.725C16.125 7.575 15.95 7.5 15.75 7.5C15.55 7.5 15.375 7.575 15.225 7.725L12 10.95L8.75 7.7C8.61667 7.56667 8.44583 7.50417 8.2375 7.5125C8.02917 7.52083 7.85833 7.59167 7.725 7.725C7.575 7.875 7.5 8.05 7.5 8.25C7.5 8.45 7.575 8.625 7.725 8.775L10.95 12L7.7 15.25C7.56667 15.3833 7.50417 15.5542 7.5125 15.7625C7.52083 15.9708 7.59167 16.1417 7.725 16.275ZM12 22C10.5833 22 9.26667 21.7458 8.05 21.2375C6.83333 20.7292 5.775 20.025 4.875 19.125C3.975 18.225 3.27083 17.1667 2.7625 15.95C2.25417 14.7333 2 13.4167 2 12C2 10.6 2.25417 9.29167 2.7625 8.075C3.27083 6.85833 3.975 5.8 4.875 4.9C5.775 4 6.83333 3.29167 8.05 2.775C9.26667 2.25833 10.5833 2 12 2C13.4 2 14.7083 2.25833 15.925 2.775C17.1417 3.29167 18.2 4 19.1 4.9C20 5.8 20.7083 6.85833 21.225 8.075C21.7417 9.29167 22 10.6 22 12C22 13.4167 21.7417 14.7333 21.225 15.95C20.7083 17.1667 20 18.225 19.1 19.125C18.2 20.025 17.1417 20.7292 15.925 21.2375C14.7083 21.7458 13.4 22 12 22Z" fill="#667085"/>
</svg>`,
};

export default createCommonIcon<keyof typeof iconVariants>(
  'CloseCircleIcon',
  iconVariants,
);
