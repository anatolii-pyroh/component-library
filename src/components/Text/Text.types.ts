import { ReactNode } from "react";

export enum TextVariantsEnum {
    Heading_1 = "heading_1",
    Heading_2 = "heading_2",
    Heading_3 = "heading_3",
    Heading_4 = "heading_4",
    Heading_5 = "heading_5",
    Subtitle_M = "subtitle_m",
    Subtitle_S = "subtitle_s",
    Body_L = "body_l",
    Body_M = "body_m",
    Caption = "caption"
}

export type TextProps = {
    variant: TextVariantsEnum;
    children: ReactNode;
}

export type TagsKeys = {
[keys: string]: string;
}