import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CheckboxSelector } from "./CheckboxSelector";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/Forms/Checkbox Selector",
  component: CheckboxSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckboxSelector>;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: ComponentStory<typeof RadioSelectorGroup> = (args) => (
//   <RadioSelectorGroup {...args} />
// );

// export const Default = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Default.args = {};

export const Default = ({ ...args }) => {
  const [isChecked, setIsChecked] = useState("radio-1");
  const handleRadio = (e: React.FormEvent<HTMLInputElement>) => {
    setIsChecked(e.currentTarget.value);
  };
  return (
    <CheckboxSelector
      id="radio-1"
      value="radio-1"
      label="I love dogs"
      isChecked={isChecked === "radio-1"}
      onChange={handleRadio}
    />
  );
};
