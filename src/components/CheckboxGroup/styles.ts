import { createStyles } from '../Theme';
import { ICheckboxGroupProps } from './index';


export default () => createStyles((theme) => ({
  checkboxGroup: (props: ICheckboxGroupProps) => ({
    display: 'flex',
    flexDirection: 'column',
    direction: props.dir || 'inherit',
  }),
  childCheckboxes: (props: ICheckboxGroupProps) => ({
    [props.dir === 'rtl' ? 'marginRight': 'marginLeft']: theme.spacing['24'],
  }),
}));
