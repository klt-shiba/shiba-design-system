import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonGroup from "./ButtonGroup";
import { Button } from "../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/CONTROLS/Button Group",
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args}>
    <Button label="Hi James" />
    <Button label="Hi James" />
  </ButtonGroup>
);

export const ButtonGroupPage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonGroupPage.args = {
  alignButtons: "LEFT",
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
