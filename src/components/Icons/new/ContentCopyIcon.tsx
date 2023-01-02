import { createCommonIcon } from '../utils';

const iconVariants = {
  default: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 18.975C7.08333 18.975 6.72917 18.8291 6.4375 18.5375C6.14583 18.2458 6 17.8916 6 17.475V3.47498C6 3.05831 6.14583 2.70414 6.4375 2.41248C6.72917 2.12081 7.08333 1.97498 7.5 1.97498H18.5C18.9167 1.97498 19.2708 2.12081 19.5625 2.41248C19.8542 2.70414 20 3.05831 20 3.47498V17.475C20 17.8916 19.8542 18.2458 19.5625 18.5375C19.2708 18.8291 18.9167 18.975 18.5 18.975H7.5ZM7.5 17.475H18.5V3.47498H7.5V17.475ZM4.5 21.975C4.08333 21.975 3.72917 21.8291 3.4375 21.5375C3.14583 21.2458 3 20.8916 3 20.475V6.14998C3 5.93331 3.07083 5.75414 3.2125 5.61248C3.35417 5.47081 3.53333 5.39998 3.75 5.39998C3.96667 5.39998 4.14583 5.47081 4.2875 5.61248C4.42917 5.75414 4.5 5.93331 4.5 6.14998V20.475H15.6C15.8167 20.475 15.9958 20.5458 16.1375 20.6875C16.2792 20.8291 16.35 21.0083 16.35 21.225C16.35 21.4416 16.2792 21.6208 16.1375 21.7625C15.9958 21.9041 15.8167 21.975 15.6 21.975H4.5ZM7.5 3.47498V17.475V3.47498Z" fill="black"/>
</svg>`,
  filled: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 18.975C7.08333 18.975 6.72917 18.8291 6.4375 18.5375C6.14583 18.2458 6 17.8916 6 17.475V3.47498C6 3.05831 6.14583 2.70414 6.4375 2.41248C6.72917 2.12081 7.08333 1.97498 7.5 1.97498H18.5C18.9167 1.97498 19.2708 2.12081 19.5625 2.41248C19.8542 2.70414 20 3.05831 20 3.47498V17.475C20 17.8916 19.8542 18.2458 19.5625 18.5375C19.2708 18.8291 18.9167 18.975 18.5 18.975H7.5ZM4.5 21.975C4.08333 21.975 3.72917 21.8291 3.4375 21.5375C3.14583 21.2458 3 20.8916 3 20.475V6.14998C3 5.93331 3.07083 5.75414 3.2125 5.61248C3.35417 5.47081 3.53333 5.39998 3.75 5.39998C3.96667 5.39998 4.14583 5.47081 4.2875 5.61248C4.42917 5.75414 4.5 5.93331 4.5 6.14998V20.475H15.6C15.8167 20.475 15.9958 20.5458 16.1375 20.6875C16.2792 20.8291 16.35 21.0083 16.35 21.225C16.35 21.4416 16.2792 21.6208 16.1375 21.7625C15.9958 21.9041 15.8167 21.975 15.6 21.975H4.5Z" fill="black"/>
</svg>`,
};

export default createCommonIcon<keyof typeof iconVariants>(
  'ContentCopyIcon',
  iconVariants,
);
