import React from "react";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";
import { CheckboxAndToggle } from "@components/CheckboxAndToggle";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";
import { Text, TextVariantsEnum } from "@components/Text";

function App() {
  return (
    <div className='App'>
      <Button text={"Click me!"} width="content"/>
      <Avatar name={"Anatolii Pyroh"} size="lg"/>
      <div>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText={"Label text"} id="1"/>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText={"Label text"} id="2"/>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText={"Label text"} id="3"/>
      </div>
      <Input customPlaceholder="Placeholder text" type="text" size="lg" withLabel={true}/>
      <div>
      <RadioButton showLabel={true} labelText={"Label text"} name="1"/>
      <RadioButton showLabel={true} labelText={"Label text"} name="1"/>
      <RadioButton showLabel={true} labelText={"Label text"} name="1"/>
      <RadioButton showLabel={true} labelText={"Label text"} name="1"/>
      </div>
      <Text textColor="Primary" variant={TextVariantsEnum.Heading_1}>123</Text>
    </div>
  );
}

export default App;
