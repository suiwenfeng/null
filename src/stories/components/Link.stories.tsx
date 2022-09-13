import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link, NavLink, LogoLink, SocialLink, LinkProps } from './Link';
import { ReactComponent as LogoSvg } from "../assets/logo.svg"

export default {
  title: 'Example/Link',
  component: Link,
  subcomponents: { NavLink, LogoLink, SocialLink },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args}><LogoSvg/></Link>;

export const Custom = Template.bind({});

export const Nav = (args: LinkProps) => <LogoLink {...args} href="#nav">Nav</LogoLink>;

export const Logo = (args: LinkProps) => <LogoLink {...args} href="#logo"><LogoSvg width={40} height={40}/></LogoLink>;

export const Social = (args: LinkProps) => <SocialLink {...args} href="#social"><LogoSvg width={40} height={40}/></SocialLink>