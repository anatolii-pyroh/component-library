import React from "react";
import { Button } from "@components/Button";
import { Avatar } from "@components/Avatar";

function App() {
  return (
    <div className='App'>
      <Button text={"click me!"} />
      <Avatar name={"Anatolii Pyroh"} size="lg"/>
    </div>
  );
}

export default App;
