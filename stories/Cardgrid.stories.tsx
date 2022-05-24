import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Main } from "../stories/Card.stories";
import { Primary } from "../stories/Grid.stories";

export default {
  title: "Molecule/CardGrid",
  component: Primary,
  subcomponents: { Main },
} as ComponentMeta<typeof Primary>;

//const Empty: ComponentStory<typeof Primary> = (args) => <Primary {...args} />;

export const CardGrid: ComponentStory<typeof Primary> = (args) => (
  <Primary {...args}>
    <Main title={"The Title"} text={"The text"} />
    <Main title={"The Title"} text={"The text"} />
    <Main title={"The Title"} text={"The text"} />
    <Main title={"The Title"} text={"The text"} />
  </Primary>
);
