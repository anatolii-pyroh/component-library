export enum BadgeColorsEnum {
  default = "#10203B",
  profile_background = "#263650",
  dark_grey = "dark-grey",
  grey = "grey",
  light_grey = "light-grey",
  blue = "primary",
  red = "red",
  green = "green",
  dark_green = "dark-green",
  orange = "orange",
  dark_orange = "dark-orange",
}

export type BadgeProps = {
  badgeColor: string;
  text: string;
};
