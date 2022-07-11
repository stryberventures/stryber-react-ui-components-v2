import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Tooltip } from '../../../../components/Tooltip';
import CopyIcon from '../CopyIcon';
import useStyles from './styles';

interface ICodeBoxProps {
  children: string[];
}

const CodeBox = ({ children }: ICodeBoxProps) => {
  const [copyString, setCopyString] = React.useState('Press to Copy');
  const classes = useStyles();

  return (
    <div className={classes.codebox}>
      <pre className={classes.children}>{children}</pre>
      <Tooltip title={copyString}>
        <CopyToClipboard
          text={children.join('')}
          onCopy={() => setCopyString('Copied!')}
        >
          <div
            className={classes.copyContainer}
            onMouseLeave={() => setCopyString('Press to Copy')}
          >
            <CopyIcon fill="#000" />
          </div>
        </CopyToClipboard>
      </Tooltip>
    </div>
  );
};

export default CodeBox;
