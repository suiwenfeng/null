import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header, HeaderProps, PureHeader } from './Header';
import { StyledProps } from 'styled-components';
import { ReactComponent as LogoSvg } from "../../assets/logo.svg"

export default {
  title: 'Example/Header',
  component: Header,
  subcomponents: { PureHeader },
} as ComponentMeta<typeof Header>; 

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} icon={{href: "#", children: <LogoSvg width={40} height={40} />}} navs={[{href: "/custom", text: "Custom"}]} />;

export const Custom = Template.bind({});

export const Pure = (args: StyledProps<HeaderProps>) => <PureHeader {...args} icon={{href: "#", children: <LogoSvg width={40} height={40} />}}  navs={[{href: "/about", text: "About"}, {href: "/projects", text: "Projects"}]} />;