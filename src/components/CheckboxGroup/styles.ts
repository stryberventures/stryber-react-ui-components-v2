import { createStyles } from '../Theme';


export default () => createStyles((theme) => ({
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  childCheckboxes: {
    marginLeft: theme.spacing['24'],
  },
}));
