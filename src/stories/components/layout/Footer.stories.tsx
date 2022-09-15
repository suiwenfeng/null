import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer, PureFooter, FooterProps } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
  subcomponents: { PureFooter },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} date='2022' who={{name: "suiwenfeng", link: "https://github.com/suiwenfeng"}} usings={[{what: "react", link: "https://reactjs.org/"}, {what: "styled-components", link: "https://styled-components.com/"}]} />;

export const Custom = Template.bind({});

export const Pure = (args: FooterProps) => <PureFooter {...args} date='2022' who={{name: "suiwenfeng", link: "https://github.com/suiwenfeng"}} usings={[{what: "react", link: "https://reactjs.org/"}, {what: "styled-components", link: "https://styled-components.com/"}]} />;