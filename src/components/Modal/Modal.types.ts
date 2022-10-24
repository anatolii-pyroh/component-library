import { TextVariantsEnum } from "@components/Text";
import { ReactNode } from "react";

export type BackdropProps = {
  onCloseModal: () => void;
  children: ReactNode;
};

export type ModalProps = {
  onCloseModal: () => void;
  modalType?: "default" | "side";
  children: ReactNode;
  title?: string;
  variant: TextVariantsEnum;
};
