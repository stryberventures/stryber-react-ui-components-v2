import React from 'react';
import Tooltip, { ITooltip } from '../../Tooltip';
import { QuestionIcon } from '../../Icons';
import useStyles from './styles';
import classNames from 'classnames';

export interface ITableTooltipButton extends Omit<ITooltip, 'children'> {}

const TableTooltipButton: React.FC<ITableTooltipButton> = (props) => {
  const { className, ...rest } = props;
  const classes = useStyles()(props);
  return (
    <Tooltip
      position="bottom"
      className={classNames(classes.tooltipTarget)}
      {...rest}
    >
      <QuestionIcon
        className={classNames(classes.tooltipTargetIcon, className)}
        data-testid="questionIcon"
      />
    </Tooltip>
  );
};

TableTooltipButton.defaultProps = {
  color: 'primary',
};

export default TableTooltipButton;
