import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";
import { FONT_COLOURS } from "../../variables/DesignTokens";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/FOUNDATIONS/HEADINGS",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  as: "h1",
  size: "xLarge",
  content: "Welcome Shibes",
  colour: `${FONT_COLOURS.BASE}`,
};

export const HeadingsList = () => {
  return (
    <>
      <Heading
        as="h1"
        size="xxLarge"
        content="Heading xxLarge"
        colour={FONT_COLOURS.BASE}
      />
      <Heading
        as="h2"
        size="xLarge"
        content="Heading xLarge"
        colour={FONT_COLOURS.BASE}
      />
      <Heading
        as="h3"
        size="large"
        content="Heading Large"
        colour={FONT_COLOURS.BASE}
      />
      <Heading
        as="h4"
        size="medium"
        content="Heading Medium"
        colour={FONT_COLOURS.BASE}
      />
      <Heading
        as="h5"
        size="small"
        content="Heading Small"
        colour={FONT_COLOURS.BASE}
      />
      <Heading
        as="h6"
        size="xSmall"
        content="Heading xSmall"
        colour={FONT_COLOURS.BASE}
      />
    </>
  );
};
