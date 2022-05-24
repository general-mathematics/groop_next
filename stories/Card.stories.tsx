import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "../components/Card/Card";

export default {
  title: "Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Main = Template.bind({});
Main.args = {
  title: "Card Title",
  text: "Hi",
  backgroundColor: "pink",
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Card Title",
  text: "Hi",
  backgroundColor: "blue",
};
