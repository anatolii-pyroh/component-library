import React, { useState } from "react";

import { ComponentStory } from "@storybook/react";
import { BackdropProps, Modal, ModalProps } from ".";

import { TextVariantsEnum } from "@components/Text";
import { Button } from "@components/Button";

export default {
  title: "Components/ModalAndSideModal",
  component: Modal,
  argTypes: {
    modalType: {
      name: "type of modal",
      control: { type: "radio" },
      options: ["default", "side"],
    },
    variant: {
      name: "title size",
      control: { type: "radio" },
      options: ["heading_3", "heading_2"],
    },
    onCloseModal: {
      table: {
        disable: true
      }
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
        <Modal {...args} onCloseModal={() => setShowModal(!showModal)}>
          Modal content
        </Modal>
      )}
    </>
  );
};

export const modalAndSideModal = Template.bind({});
modalAndSideModal.args = {
  title: "Title text",
  modalType: "default",
  variant: TextVariantsEnum.Heading_3,
};
