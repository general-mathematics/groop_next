import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Grid } from "../components/Grid";

export default {
  title: "Grid",
  component: Grid,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

//Story States
export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
};
