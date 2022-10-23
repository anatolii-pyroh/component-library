import React, { useState } from "react";

import { ComponentStory } from "@storybook/react";
import { BackdropProps, Modal, ModalProps } from ".";

import { TextVariantsEnum } from "@components/Text";
import { Button } from "@components/Button";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["heading_2", "heading_3"],
    },
    onCloseModal: {
      control: false,
      description: "Close modal window function",
      name: "close function"
    },
  },
};

const Template: ComponentStory<
  (Props: ModalProps & BackdropProps) => JSX.Element
> = (args) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button
        text='Show modal window'
        width='content'
        onClick={() => setShowModal(!showModal)}
      />
      {showModal && (
        <Modal {...args} onCloseModal={() => setShowModal(!showModal)}>Modal content</Modal>
      )}
    </>
  );
};

export const modal = Template.bind({});
modal.args = {
  title: "Title text",
  variant: TextVariantsEnum.Heading_3,
};
