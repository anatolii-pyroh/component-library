import { useState } from "react";
import Select, {
  SingleValue,
  MultiValue,
  ActionMeta,
  InputActionMeta,
} from "react-select";

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
    setSelectedOptions([...newValues] as SelectOptionType[]);
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
      isMulti
    />
  );
};

SelectComponent.displayName = "Select";
