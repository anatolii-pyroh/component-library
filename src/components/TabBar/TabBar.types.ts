export type TabBarProps = {
    tabList: string[];
    activeTab: string;
    onClick: (tab: string) => void;
}