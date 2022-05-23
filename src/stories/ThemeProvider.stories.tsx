import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from '../components/ThemeProvider';
import { Button } from '../components/Button';
import { defaultTheme } from '../styles/defaultTheme';
import { Input } from '../components/Input';
import { CheckBox } from '../components/CheckBox';
import { RadioButton } from '../components/RadioButton';
import { TextLink } from '../components/TextLink';
import LeftArrow from './icons/leftArrow';
import { Dropdown } from '../components/Dropdown';
import { Tooltip } from '../components/Tooltip'
import { Multiselect } from '../components/Multiselect';
import { Toggle } from '../components/Toggle';

export default {
  title: 'Components/ThemeProvider',
  component: ThemeProvider,
  parameters: {
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = (args) => (
  <ThemeProvider {...args}>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Button </h2>
    <Button variant="contained" label={'Contained primary'}/>
    <h1> </h1>
    <Button variant="contained" color="secondary" label={'Contained secondary'}/>
    <h1> </h1>
    <Button variant="outlined" label={'Outlined primary'}/>
    <h1> </h1>
    <Button variant="outlined" color="secondary" label={'Outlined secondary'}/>
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
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Toggle</h2>
    <Toggle checked={true} label="Primary on"/>
    <h1> </h1>
    <Toggle label="Primary off" />
    <h1> </h1>
    <Toggle checked={true} disabled label="Disabled on"/>
    <h1> </h1>
    <Toggle checked={true} color="secondary" label="Secondary on"/>
    <h1> </h1>
    <Toggle color="secondary" label="Secondary off"/>
    <h1> </h1>
    <Toggle checked={true} disabled color="secondary" label="Disabled on"/>
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
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>TextLink</h2>
    <TextLink text="Primary"/>
    <h1> </h1>
    <TextLink text="Secondary" color="secondary"/>
    <h1> </h1>
    <TextLink text="Disabled" disabled />
    <h1> </h1>
    <TextLink text="With icon" iconLeft={<LeftArrow />} />
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='top' version='light'>Tooltip top position light version</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='topStart' version='dark'>Tooltip top-start position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='topEnd' version='dark'>Tooltip top-end position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='bottom' version='dark'>Tooltip bottom position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='bottomStart' version='dark'>Tooltip bottom-start position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='bottomEnd' version='dark'>Tooltip bottom-end position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='right' version='light'>Tooltip right position light version</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='rightStart' version='dark'>Tooltip right-start position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='rightEnd' version='dark'>Tooltip right-end position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='left' version='dark'>Tooltip left position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='leftStart' version='dark'>Tooltip left-start position</Tooltip>
    <h1> </h1>
    <Tooltip title='This is a Tooltip title' position='leftEnd' version='dark'>Tooltip left-end position</Tooltip>
    <h1> </h1>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Input </h2>
    <Input label="Color primary" placeholder="some@mail.com"/>
    <h1> </h1>
    <Input label="Color secondary" placeholder="some@mail.com" color="secondary"/>
    <h1> </h1>
    <Input label="Error state" placeholder="some@mail.com" errorMessage="This is an error"/>
    <h1> </h1>
    <Input label="Hint" placeholder="some@mail.com" hint="This is a hint"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Dropdown</h2>
    <Dropdown label="Dropdown" placeholder="It use Input">
      <div style={{ padding: 8 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
    </Dropdown>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Multiselect</h2>
    <Multiselect label="Multiselect" placeholder="Placeholder" options={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']}/>
  </ThemeProvider>
);

export const Theme = Template.bind({});
Theme.args = {
  theme: defaultTheme
};