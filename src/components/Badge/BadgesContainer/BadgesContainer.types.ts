export type BadgesContainerProps = {
  items: BadgeItem[];
  className?: string;
};

type BadgeItem = {
  id?: number;
  text: string;
  badgeColor: string;
};
