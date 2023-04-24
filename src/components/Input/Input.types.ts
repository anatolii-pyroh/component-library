import React from "react";
import { IconsEnum } from "@components/SvgIcon";

export type InputProps = {
  value?: string;
  size?: string;
  style?: React.CSSProperties;
  type?: string;
  icon?: IconsEnum | null;
  withLabel?: boolean;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  onIconClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
};
