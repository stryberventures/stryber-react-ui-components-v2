import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '.';
import Button from '../Button';
import { defaultTheme } from './defaultTheme';
import Input from '../Input';
import CheckBox from '../CheckBox';
import RadioButton from '../RadioButton';
import Text from '../Text';
import TextLink from '../TextLink';
import LeftArrow from '../../storybook/icons/leftArrow';
import Dropdown from '../Dropdown';
import Tooltip from '../Tooltip'
import Multiselect from '../Multiselect';
import Switch from '../Switch';
import TextArea from '../TextArea';
import pkg from './package.json';

export default {
  title: 'components/Theme',
  component: ThemeProvider,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Button </h2>
    <Button variant="contained">Contained primary</Button>
    <h1> </h1>
    <Button variant="contained" color="secondary">Contained secondary</Button>
    <h1> </h1>
    <Button variant="outlined">Outlined primary</Button>
    <h1> </h1>
    <Button variant="outlined" color="secondary">Outlined secondary</Button>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Checkbox</h2>
    <CheckBox label="Primary"/>
    <h1> </h1>
    <CheckBox checked={true} label="Checked" />
    <h1> </h1>
    <CheckBox checked={true} disabled label="Disabled"/>
    <h1> </h1>
    <CheckBox color="secondary" label="Secondary"/>
    <h1> </h1>
    <CheckBox checked={true} color="secondary" label="Checked"/>
    <h1> </h1>
    <CheckBox checked={true} disabled color="secondary" label="Disabled"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Switch</h2>
    <Switch checked={true} label="Primary on"/>
    <h1> </h1>
    <Switch label="Primary off" />
    <h1> </h1>
    <Switch checked={true} disabled label="Disabled on"/>
    <h1> </h1>
    <Switch checked={true} color="secondary" label="Secondary on"/>
    <h1> </h1>
    <Switch color="secondary" label="Secondary off"/>
    <h1> </h1>
    <Switch checked={true} disabled color="secondary" label="Disabled on"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Radio button</h2>
    <RadioButton label="Primary" />
    <h1> </h1>
    <RadioButton label="Checked"  checked={true}/>
    <h1> </h1>
    <RadioButton label="Disabled"  checked={true} disabled/>
    <h1> </h1>
    <RadioButton color="secondary" label="Secondary" />
    <h1> </h1>
    <RadioButton checked={true} color="secondary" label="Checked" />
    <h1> </h1>
    <RadioButton checked={true} disabled color="secondary" label="Disabled" />
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Text Elements</h2>
    <Text variant="h1">H1</Text>
    <h1> </h1>
    <Text variant="h2">H2</Text>
    <h1> </h1>
    <Text variant="h3">H3</Text>
    <h1> </h1>
    <Text variant="h4">H4</Text>
    <h1> </h1>
    <Text variant="quote">Quote</Text>
    <h1> </h1>
    <Text variant="label">Label</Text>
    <h1> </h1>
    <Text variant="body">Body</Text>
    <h1> </h1>
    <Text variant="description">Description</Text>
    <h1> </h1>
    <Text variant="subline">Subline</Text>
    <h1> </h1>
    <Text variant="caption">Caption</Text>
    <h1> </h1>
    <Text variant="smallText">Small text</Text>
    <h1> </h1>
    <Text variant="footnote">Footnote</Text>
    <h1> </h1>
    <Text variant="buttonLabel">Button label</Text>
    <h1> </h1>
    <Text variant="labelHighlight">Label Highlight</Text>
    <h1> </h1>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>TextLink</h2>
    <TextLink>Primary</TextLink>
    <h1> </h1>
    <TextLink color="secondary">Secondary</TextLink>
    <h1> </h1>
    <TextLink disabled>Disabled</TextLink>
    <h1> </h1>
    <TextLink iconLeft={<LeftArrow />}>With icon</TextLink>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Tooltip</h2>
    <Tooltip title='This is a Tooltip title' position='right' version='light' visible={true}>Tooltip light version</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='right' version='dark'>Tooltip dark version</Tooltip>
    <h1> </h1>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Input </h2>
    <Input label="Color primary" placeholder="some@mail.com"/>
    <h1> </h1>
    <Input label="Color secondary" placeholder="some@mail.com" color="secondary"/>
    <h1> </h1>
    <Input label="Disabled" placeholder="some@mail.com" disabled={true}/>
    <h1> </h1>
    <Input label="Error state" placeholder="some@mail.com" errorMessage="This is an error"/>
    <h1> </h1>
    <Input label="Hint" placeholder="some@mail.com" hint="This is a hint"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>TextArea </h2>
    <TextArea label="Color primary" />
    <h1> </h1>
    <TextArea label="Color secondary" color="secondary" />
    <h1> </h1>
    <TextArea label="Disabled" disabled={true} />
    <h1> </h1>
    <TextArea label="Disabled" errorMessage="This is an error" />
    <h1> </h1>
    <TextArea label="Max length" maxLength={200} />
    <h1> </h1>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Dropdown</h2>
    <Dropdown label="Dropdown" placeholder="It use Input">
      <div style={{ padding: 8 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </Dropdown>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Multiselect</h2>
    <Multiselect label="Multiselect" placeholder="Placeholder"
      options={[
        { value: '1', label: 'One' },
        { value: '2', label: 'Two' },
        { value: '3', label: 'Three' },
        { value: '4', label: 'Four' },
        { value: '5', label: 'Five' },
        { value: '6', label: 'Six' },
        { value: '7', label: 'Seven' },
      ]}/>
  </ThemeProvider>
);

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme
};
