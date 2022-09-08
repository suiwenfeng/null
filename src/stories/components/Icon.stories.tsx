import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, LogoIcon, SocialIcon, IconProps } from './Icon';
import { ReactComponent as LogoSvg } from "../assets/logo.svg"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Icon',
  component: Icon,
  subcomponents: { LogoIcon, SocialIcon }, 
  args: {
    link: "#",
  }
} as ComponentMeta<typeof Icon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Icon> = (args) => <Icon link={args.link} className={args.className}><LogoSvg/></Icon>;

export const Custom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  className: "custom"
};

export const Logo = (args: IconProps) => <LogoIcon link="#logo" className="logo"><LogoSvg/></LogoIcon>;

export const Social = (args: IconProps) => <SocialIcon link="#social" className="social"><LogoSvg/></SocialIcon>