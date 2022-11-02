import { IconsEnum } from "@components/SvgIcon";

export type InputProps = {
    value?: string;
    size?: string;
    type?: string;
    icon?: IconsEnum | null;
    showIcon?: boolean;
    withLabel?: boolean;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}