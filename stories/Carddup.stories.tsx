import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "../components/Card";

export default {
  title: "${1:story title}",
  component: ${2:componentType},
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ${2:componentType}>;

const Template: ComponentStory<typeof ${2:componentType}> = (args) => <${2:componentType} {...args} />;

//Story States
export const ${3:namedStory} = Template.bind({});
${3:namedStory}.args = {
//title: "",

};
