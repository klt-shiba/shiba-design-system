import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Alert } from "./Alert";

export default {
  title: "Shiba-DS/Feedback/Alert",
  component: Alert,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const InlineAlert = Template.bind({});
InlineAlert.args = {
  alertType: "INLINE",
  message: "Hi",
};

export const BoxAlert = Template.bind({});
BoxAlert.args = {
  alertType: "BOX",
};
