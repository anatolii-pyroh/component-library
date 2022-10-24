import React, { useRef } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

import styles from "./Modal.module.scss";
import { BackdropProps, ModalProps } from "./Modal.types";

import { Text } from "@components/Text";

const Backdrop: React.FC<BackdropProps> = ({ children, onCloseModal }) => {
  const backdropRef = useRef(null);

  const backdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) {
      onCloseModal();
    }
  };

  return (
    <div className={styles.backdrop} ref={backdropRef} onClick={backdropClick}>
      {children}
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  variant,
  modalType = "default",
  onCloseModal,
}) => {
  
  const modalClass = classNames({
    [styles.modal]: modalType === "default",
    [styles["side_modal"]]: modalType === "side",
  });

  return (
    <div className={modalClass}>
      <Text
        variant={variant}
        textColor='default'
        style={{ marginBottom: "1rem" }}
      >
        {title}
      </Text>
      <div>{children}</div>
      <div className={styles["close_button"]} onClick={onCloseModal}></div>
    </div>
  );
};

export const ModalComponent: React.FC<ModalProps> = ({
  children,
  modalType,
  title,
  variant,
  onCloseModal,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onCloseModal}>
          <Modal
            title={title}
            variant={variant}
            onCloseModal={onCloseModal}
            modalType={modalType}
          >
            {children}
          </Modal>
        </Backdrop>,
        document.getElementById("modal")! || document.getElementById("root")
      )}
    </React.Fragment>
  );
};
