import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "./Container";
import { Grid } from "./Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/FOUNDATIONS/Grid",
  component: Grid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const GridSystem = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GridSystem.args = {
  fluid: true,
  columns: 12,
  size: { xs: 1 },
  push: { xs: 1 },
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   importance: "secondary",
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
