import React, { useState } from "react";
import DatePicker from "react-datepicker";

// import styles from "./Datepicker.module.scss"

import { Input } from "@components/Input";
import { DatepickerProps } from "./Datepicker.types";
import { IconsEnum } from "@components/SvgIcon";

export const DatepickerComponent: React.FC<DatepickerProps> = ({
  inputRef,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);
  return (
    <DatePicker
      customInput={
        <Input
          size='lg'
          inputRef={inputRef}
          icon={IconsEnum.calendar}
          style={{ cursor: "pointer" }}
        />
      }
      dateFormat='dd.MM.yyyy'
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
    />
  );
};
