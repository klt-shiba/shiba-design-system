import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RadioSelector } from "./RadioSelector";
import { RadioSelectorGroup } from "./RadioSelectorGroup";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/Forms/Radio Selector",
  component: RadioSelectorGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RadioSelectorGroup>;

const [isChecked, setIsChecked] = useState("");
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioSelectorGroup> = (args) => (
  <RadioSelectorGroup
    onChange={(e: Event) => {
      let event = e.target as HTMLButtonElement;
      setIsChecked(event.value);
    }}
    {...args}
  >
    <RadioSelector
      id="radio-1"
      value="radio-1"
      label="I love dogs"
      isChecked={isChecked === "radio-1"}
    />
    <RadioSelector
      id="radio-2"
      value="radio-2"
      label="I love cats"
      isChecked={isChecked === "radio-2"}
    />
    <RadioSelector
      id="radio-3"
      value="radio-3"
      label="I love rabbits"
      isChecked={isChecked === "radio-3"}
    />
    <RadioSelector
      id="radio-4"
      value="radio-4"
      label="I love sleeping"
      isChecked={isChecked === "radio-4"}
    />
  </RadioSelectorGroup>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
