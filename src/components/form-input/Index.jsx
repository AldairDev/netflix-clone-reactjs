import React from "react";
import { Index as Button } from "../button/index";
import Input from "../input/Index";

const Index = () => {
  return (
    <div className="email-form">
      <Input width="500px" height="61.4px" />
      <Button
        height="65px"
        width="300px"
        text="PROBAR AHORA"
        textSize={"1.8rem"}
      />
    </div>
  );
};

export { Index };
