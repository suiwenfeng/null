import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav, NavProps, PureNav } from './Nav';
import { StyledProps } from 'styled-components';

export default {
  title: 'Example/Nav',
  component: Nav,
  subcomponents: { PureNav },
} as ComponentMeta<typeof Nav>; 

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} items={[{href: "/custom", text: "Custom"}]} />;

export const Custom = Template.bind({});

export const Pure = (args: StyledProps<NavProps>) => <PureNav {...args} items={[{href: "/about", text: "About"}, {href: "/project", text: "Project"}]} />;