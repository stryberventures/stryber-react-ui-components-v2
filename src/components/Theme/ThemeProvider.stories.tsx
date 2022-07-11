import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { defaultTheme } from './defaultTheme';
import { Input } from '../Input';
import { CheckBox } from '../CheckBox';
import { RadioButton } from '../RadioButton';
import { TextLink } from '../TextLink';
import LeftArrow from '../../storybook/icons/leftArrow';
import { Dropdown } from '../Dropdown';
import { Tooltip } from '../Tooltip'
import { Multiselect } from '../Multiselect';
import { Switch } from '../Switch';
import { TextArea } from '../TextArea';
import { ThemeChooser } from '../../storybook/preview/ThemeChooser';
import pkg from './package.json';

export default {
  title: 'components/Theme',
  component: ThemeChooser,
  parameters: {
    pkg,
    componentSubtitle: `Component which enables support of custom themes. To use a custom theme wrap your root
     component with ThemeProvider and pass the theme as a property.`
  },
} as ComponentMeta<typeof ThemeChooser>;

const Template: ComponentStory<typeof ThemeChooser> = (args) => (
  <ThemeChooser {...args}>
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
    <h2 style={{ fontFamily: 'Inter', color: '#003CB8' }}>TextLink</h2>
    <TextLink text="Primary"/>
    <h1> </h1>
    <TextLink text="Secondary" color="secondary"/>
    <h1> </h1>
    <TextLink text="Disabled" disabled />
    <h1> </h1>
    <TextLink text="With icon" iconLeft={<LeftArrow />} />
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
    <Multiselect label="Multiselect" placeholder="Placeholder" options={['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']}/>
  </ThemeChooser>
);

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  theme: defaultTheme
};
