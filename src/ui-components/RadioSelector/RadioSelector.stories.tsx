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
    <RadioSelectorGroup {...args}>
      <RadioSelector
        id="radio-1"
        value="radio-1"
        label="I love dogs"
        isChecked={isChecked === "radio-1"}
        onChange={handleRadio}
      />
      <RadioSelector
        id="radio-2"
        value="radio-2"
        label="I love cats"
        isChecked={isChecked === "radio-2"}
        onChange={handleRadio}
      />
      <RadioSelector
        id="radio-3"
        value="radio-3"
        label="I love rabbits"
        isChecked={isChecked === "radio-3"}
        onChange={handleRadio}
      />
      <RadioSelector
        id="radio-4"
        value="radio-4"
        label="I love sleeping"
        isChecked={isChecked === "radio-4"}
        onChange={handleRadio}
      />
    </RadioSelectorGroup>
  );
};
