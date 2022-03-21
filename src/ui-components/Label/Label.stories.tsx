import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Label } from "./Label";
import { FONT_COLOURS } from "../../variables/DesignTokens";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/FORMS/Label",
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Email address",
};
