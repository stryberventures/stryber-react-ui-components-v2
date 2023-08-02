import React from 'react';
import { ComponentMeta } from '@storybook/react';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import Dialog from './';
import DialogBasicExample, {
  DialogBasicExampleCode,
} from '../../storybook/preview/Dialog/Basic';
import DialogButtonsInRowExample, {
  DialogButtonsInRowExampleCode,
} from '../../storybook/preview/Dialog/ButtonsInRow';
import DialogButtonsShrunkExample, {
  DialogButtonsShrunkExampleCode,
} from '../../storybook/preview/Dialog/ButtonsShrunk';
import DialogTextCenterExample, {
  DialogTextCenterExampleCode,
} from '../../storybook/preview/Dialog/TextCenter';
import DialogImageExample, {
  DialogImageExampleCode,
} from '../../storybook/preview/Dialog/Image';
import DialogCheckboxesExample, {
  DialogCheckboxesExampleCode,
} from '../../storybook/preview/Dialog/Checkboxes';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    pkg,
  },
  argTypes: buildArgTypes([
    'disableEscPress',
    'onClose',
    'dir',
    'className',
    'modalContainer',
    'overlayClassName',
  ]),
} as ComponentMeta<typeof Dialog>;

export const DialogBasic = () => <DialogBasicExample />;
DialogBasic.parameters = {
  docs: {
    source: {
      code: DialogBasicExampleCode,
    },
  },
};

export const DialogButtonsInRow = () => <DialogButtonsInRowExample />;
DialogButtonsInRow.parameters = {
  docs: {
    source: {
      code: DialogButtonsInRowExampleCode,
    },
  },
};

export const DialogButtonsShrunk = () => <DialogButtonsShrunkExample />;
DialogButtonsShrunk.parameters = {
  docs: {
    source: {
      code: DialogButtonsShrunkExampleCode,
    },
  },
};

export const DialogTextCenter = () => <DialogTextCenterExample />;
DialogTextCenter.parameters = {
  docs: {
    source: {
      code: DialogTextCenterExampleCode,
    },
  },
};

export const DialogImage = () => <DialogImageExample />;
DialogImage.parameters = {
  docs: {
    source: {
      code: DialogImageExampleCode,
    },
  },
};

export const DialogCheckboxes = () => <DialogCheckboxesExample />;
DialogCheckboxes.parameters = {
  docs: {
    source: {
      code: DialogCheckboxesExampleCode,
    },
  },
};
