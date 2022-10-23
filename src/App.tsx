import React, { useState } from "react";


import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";
import { CheckboxAndToggle } from "@components/CheckboxAndToggle";
import { Input } from "@components/Input";
import { RadioButton } from "@components/RadioButton";
import { Text, TextVariantsEnum } from "@components/Text";
import { Modal } from "@components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='App'>
      <Button text="Click me!" width="content"/>
      <Avatar name="Anatolii Pyroh" size="lg"/>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText="Label text" id="1"/>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText="Label text" id="2"/>
      <CheckboxAndToggle type="checkbox" showLabel={true} labelText="Label text" id="3"/>
      </div>
      <Input customPlaceholder="Placeholder text" type="text" size="lg" withLabel={true}/>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <RadioButton showLabel={true} labelText="Label text" name="1"/>
      <RadioButton showLabel={true} labelText="Label text" name="1"/>
      <RadioButton showLabel={true} labelText="Label text" name="1"/>
      <RadioButton showLabel={true} labelText="Label text" name="1"/>
      </div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Text textColor="Primary" variant={TextVariantsEnum.Heading_1} style={{margin: "1rem"}}>Random text</Text>
      <Button text="Show modal window" width="content" onClick={() => setShowModal(!showModal)}/>
      </div>
      {showModal && 
      <Modal title="Modal title" variant={TextVariantsEnum.Heading_3} onCloseModal={() => setShowModal(!showModal)}>
        <div>
          <RadioButton showLabel={true} labelText="Label text" name="1"/>
          <RadioButton showLabel={true} labelText="Label text" name="1"/>
          <RadioButton showLabel={true} labelText="Label text" name="1"/>
          <RadioButton showLabel={true} labelText="Label text" name="1"/>
        </div>
      </Modal>}
    </div>
  );
}

export default App;
