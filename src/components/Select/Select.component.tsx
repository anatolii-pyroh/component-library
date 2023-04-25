import { CSSProperties, useState } from "react";
import Select, {
  SingleValue,
  MultiValue,
  ActionMeta,
  InputActionMeta,
  StylesConfig,
  GroupBase,
} from "react-select";

import styles from "./Select.module.scss";

type SelectOptionType = { label: string; value: string };

export const SelectComponent: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<SelectOptionType[]>(
    []
  );
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleChange = (
    newValues: MultiValue<SelectOptionType>,
    actionMeta: ActionMeta<SelectOptionType>
  ) => {
    console.log(newValues, actionMeta);
    setSelectedOptions(newValues as SelectOptionType[]);
  };

  const colorStyles: StylesConfig<SelectOptionType, true> = {
    container: (styles) => ({
      ...styles,
      width: 420,
    }),
    control: (styles, { isFocused }) => ({
      ...styles,
      cursor: "pointer",
      borderColor: isFocused ? "var(--primary)" : "var(--grey)",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        color: isFocused ? "var(--primary)" : "",
        backgroundColor: "transparent",
        cursor: "pointer",
      };
    },
  };

  return (
    <Select
      options={options}
      value={selectedOptions}
      onChange={handleChange}
      inputValue={""}
      onInputChange={(newValue: string, actionMeta: InputActionMeta) => null}
      onMenuOpen={() => null}
      onMenuClose={() => null}
      styles={colorStyles}
      className={styles.select}
      isMulti
    />
  );
};

SelectComponent.displayName = "Select";
