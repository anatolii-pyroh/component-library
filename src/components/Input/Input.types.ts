import { IconsEnum } from "@components/SvgIcon";

export type InputProps = {
    size?: string;
    type?: string;
    icon?: IconsEnum | null;
    showIcon?: boolean;
    withLabel?: boolean;
    placeholder?: string;
    error?: boolean;
    errorText?: string;
}