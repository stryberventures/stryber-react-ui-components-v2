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
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Input </h2>
    <Input label="Color primary" placeholder="some@mail.com"/>
    <h1> </h1>
    <Input label="Color secondary" placeholder="some@mail.com" color="secondary"/>
    <h1> </h1>
    <Input label="Error state" placeholder="some@mail.com" errorMessage="This is an error"/>
    <h1> </h1>
    <Input label="Hint" placeholder="some@mail.com" hint="This is a hint"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Checkbox</h2>
    <CheckBox />
    <h1> </h1>
    <CheckBox checked={true}/>
    <h1> </h1>
    <CheckBox checked={true} disabled/>
    <h1> </h1>
    <CheckBox color="secondary"/>
    <h1> </h1>
    <CheckBox checked={true} color="secondary"/>
    <h1> </h1>
    <CheckBox checked={true} disabled color="secondary"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>Radio button</h2>
    <RadioButton />
    <h1> </h1>
    <RadioButton checked={true}/>
    <h1> </h1>
    <RadioButton checked={true} disabled/>
    <h1> </h1>
    <RadioButton color="secondary"/>
    <h1> </h1>
    <RadioButton checked={true} color="secondary"/>
    <h1> </h1>
    <RadioButton checked={true} disabled color="secondary"/>
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>TextLink</h2>
    <TextLink text="Primary"/>
    <h1> </h1>
    <TextLink text="Secondary" color="secondary"/>
    <h1> </h1>
    <TextLink text="Disabled" disabled />
    <h1> </h1>
    <TextLink text="With icon" iconLeft={<LeftArrow />} />
  </ThemeProvider>
);

export const Theme = Template.bind({});
Theme.args = {
  theme: defaultTheme
};
