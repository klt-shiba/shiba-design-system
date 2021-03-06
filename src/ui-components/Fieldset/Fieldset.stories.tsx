import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Fieldset } from "./Fieldset";
import { Label } from "../Label/Label";
import { TextInput } from "../TextInput/TextInput";
import { Container } from "../Grid/Container";
import { Row } from "../Grid/Row";
import { Alert } from "../Alert/Alert";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Shiba-DS/Forms/Text Field",
  component: Fieldset,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Fieldset>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Fieldset> = (args) => (
  <Fieldset {...args}>
    <Label
      htmlFor="storybook-example-input"
      id="storybook-example-label"
      label="Email address"
    />
    <TextInput
      id="storybook-example-input"
      name="storybook-example-input"
      ariaLabelledBy="storybook-example-label"
      ariaInvalid={false}
      ariaDescribedBy="storybook-example-alert"
      type="email"
      required={false}
    />
    <Alert
      id="storybook-example-alert"
      message="This alert is working"
      ariaLive="off"
      severity="SUCCESS"
      alertType="INLINE"
    />
  </Fieldset>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  id: "storybook-text-field",
};

export const FieldsetOptions = ({ ...args }) => {
  return (
    <>
      <Container>
        <Row>
          <Fieldset id="storybook-fieldset-example" {...args}>
            <Label
              htmlFor="storybook-example-input"
              id="storybook-example-label"
              label="Enter your Email"
            />
            <TextInput
              id="storybook-example-input"
              name="storybook-example-input"
              ariaLabelledBy="storybook-example-label"
              ariaInvalid={false}
              ariaDescribedBy={undefined}
              type="email"
              required={false}
            ></TextInput>
          </Fieldset>
          <br></br>
          <Fieldset id="storybook-number-example" {...args}>
            <Label
              htmlFor="storybook-number-input"
              id="storybook-number-label"
              label="Enter your number"
            />
            <TextInput
              id="storybook-number-input"
              name="storybook-number-input"
              ariaLabelledBy="storybook-number-label"
              ariaInvalid={false}
              ariaDescribedBy={undefined}
              type="number"
              required={false}
            ></TextInput>
          </Fieldset>
          <br></br>
          <Fieldset id="storybook-address-example" {...args}>
            <Label
              htmlFor="storybook-address-input"
              id="storybook-address-label"
              label="Enter your address"
            />
            <TextInput
              id="storybook-address-input"
              name="storybook-address-input"
              ariaLabelledBy="storybook-address-label"
              ariaInvalid={false}
              hasError={true}
              ariaDescribedBy={"storybook-example-alert"}
              type="text"
              required={false}
            ></TextInput>
            <Alert
              id="storybook-example-alert"
              message="This alert is not working"
              ariaLive="polite"
              severity="DANGER"
              alertType="INLINE"
            />
          </Fieldset>
        </Row>
      </Container>
    </>
  );
};
