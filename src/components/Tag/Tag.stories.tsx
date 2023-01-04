import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tag from './index';
import Input from '../Input';
import Button from '../Button';
import LeftArrow from '../../storybook/icons/leftArrow';
import RightArrow from '../../storybook/icons/rightArrow';
import pkg from './package.json';
import { buildExcludeArgTypes } from '../../storybook/utils';
import toRem from '../../utils/toRem';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    pkg,
  },
  args: {
    shape: 'round',
    size: 'large',
    color: 'primary',
    selected: false,
    disabled: false,
  },
  argTypes: buildExcludeArgTypes(['iconLeft', 'iconRight', 'className']),
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

export const RoundSmall = Template.bind({});
RoundSmall.args = {
  children: 'Round small',
  size: 'small',
  shape: 'round',
  onRemove: undefined,
};

export const SquareMiddle = Template.bind({});
SquareMiddle.args = {
  children: 'Square middle',
  size: 'medium',
  shape: 'square',
  onRemove: undefined,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Square removable',
  iconLeft: <LeftArrow />,
  onRemove: undefined,
};

export const RightIconMedium = Template.bind({});
RightIconMedium.args = {
  children: 'Right icon medium',
  iconRight: <RightArrow />,
  size: 'medium',
  onRemove: undefined,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
  onRemove: undefined,
};

export const RemovableLarge = Template.bind({});
RemovableLarge.args = {
  children: 'Removable Large',
  size: 'large',
  onRemove: () => {},
};

export const RemovableMedium = Template.bind({});
RemovableMedium.args = {
  children: 'Removable Medium',
  size: 'medium',
  onRemove: () => {},
};

export const RemovableSmall = Template.bind({});
RemovableSmall.args = {
  children: 'Removable Small',
  size: 'small',
  onRemove: () => {},
};

const removableTags = [
  { id: 1, text: 'Tag 1', iconRight: <RightArrow /> },
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

export const Removable = RemovableTemplate.bind({});
Removable.args = {
  children: 'Removable Medium',
  size: 'medium',
  onRemove: () => {},
};

function generateTagId() {
  return Math.ceil(Math.random() * (99000 - 10000) + 10000);
}
