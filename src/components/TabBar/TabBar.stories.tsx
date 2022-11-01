import { ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { TabBar } from ".";
import { TabBarProps } from "./TabBar.types";

export default {
  title: "Components/TabBar",
  component: TabBar,
  argTypes: {
    tabList: {
      table: {
        disable: true,
      },
    },
    activeTab: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: ComponentStory<(Props: TabBarProps) => JSX.Element> = (arg) => {
  const tabList = ["Проекты", "Пользователи", "Товары", "Отчёты"];
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const handleShowAnotherBar = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
    <TabBar
      {...arg}
      tabList={tabList}
      activeTab={activeTab}
      onClick={handleShowAnotherBar}
    />
    {activeTab === "Проекты" && "Контент с проектами"}
    {activeTab === "Пользователи" && "Контент с пользователями"}
    {activeTab === "Товары" && "Контент с товарами"}
    {activeTab === "Отчёты" && "Контент с отчётами"}
    </>
  );
};

export const tabBar = Template.bind({});
tabBar.args = {};
