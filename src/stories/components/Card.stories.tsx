import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card, PureCard, CardProps } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  subcomponents: { PureCard },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card id='' title='这是一个测试标题' updateAt='2022年9月20日' tags={[{id: "1", name: "新区"}, {id: "2", name: "应用"}]} />;

export const Custom = Template.bind({});

export const Pure = (args: CardProps) => <PureCard  id='' title='这是一个测试标题' updateAt='2022年9月20日' tags={[{id: "1", name: "新区"}, {id: "2", name: "应用"}]} />;