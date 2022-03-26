import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioSelector } from "./RadioSelector";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/Forms/Radio Selector",
  component: RadioSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RadioSelector>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioSelector> = (args) => (
  <RadioSelector {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
