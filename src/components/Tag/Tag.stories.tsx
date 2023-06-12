import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag, { defaultTagProps } from './index';
import Input from '../Input';
import Button from '../Button';
import { DocumentIcon, FilesIcon, ProfileIcon } from '../Icons';
import pkg from './package.json';
import { buildArgTypes } from '../../storybook/utils';
import { toRem } from '../Theme';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    pkg,
  },
  args: defaultTagProps,
  argTypes: buildArgTypes(['iconLeft', 'iconRight', 'className', 'onSelect', 'onRemove', 'testId']),
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
  onRemove: undefined,
};

export const Square = Template.bind({});
Square.args = {
  children: 'Square',
  shape: 'square',
  onRemove: undefined,
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'small',
  onRemove: undefined,
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium',
  size: 'medium',
  onRemove: undefined,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Left icon',
  iconLeft: <DocumentIcon />,
  onRemove: undefined,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Right icon',
  iconRight: <FilesIcon />,
  onRemove: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
  onRemove: undefined,
  iconRight: <FilesIcon />,
};

export const Removable = Template.bind({});
Removable.args = {
  children: 'Removable',
  size: 'large',
  onRemove: () => {},
};


export const Selected = Template.bind({});
Selected.args = {
  children: 'Selected',
  selected: true,
  onRemove: undefined,
};

const removableTags = [
  { id: 1, text: 'Tag 1', iconRight: <ProfileIcon /> },
  { id: 2, text: 'Tag 2', },
  { id: 3, text: 'Tag 3', },
  { id: 4, text: 'Tag 4', },
  { id: 5, text: 'Tag 6', },
];

const RemovableTemplate: ComponentStory<typeof Tag> = (args) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [tags, setTags] = useState(removableTags);
  const [newTag, setNewTag] = useState<string>('');
  const unselectTag = (tagId: number) => {
    setSelected(selected.filter((id) => id != tagId));
  };
  const onSelect = (tagId: number) => {
    selected.includes(tagId) ? unselectTag(tagId) : setSelected([...selected, tagId]);
  };
  const onRemove = (tagId: number) => {
    setTags(tags.filter(({ id }) => tagId != id));
    selected.includes(tagId) && unselectTag(tagId);
  };
  const addTag = () => {
    newTag && setTags([...tags, { id: generateTagId(), text: newTag }]);
    setNewTag('');
  };
  return (
    <>
      <div style={{ padding: '20px 0', display: 'flex', alignItems: 'center', gap: toRem(12) }}>
        <Input
          type="text"
          value={newTag}
          onChange={(e) => {
            setNewTag(e.target.value)
          }}
        />
        <Button
          onClick={addTag}
          size="small"
        >
          Add tag
        </Button>
      </div>
      <div style={{ padding: '20px 0', display: 'flex', gap: toRem(12) }}>
        {tags.map(({ id, text, iconRight }) => (
          <Tag
            {...args}
            key={id}
            iconRight={iconRight}
            selected={selected.includes(id)}
            onSelect={() => onSelect(id)}
            onRemove={() => onRemove(id)}
          >
            {text}
          </Tag>
        ))}
      </div>
    </>
  )
};

export const Playground = RemovableTemplate.bind({});
Playground.args = {
  size: 'medium',
};

function generateTagId() {
  return Math.ceil(Math.random() * (99000 - 10000) + 10000);
}
