import Rive, { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import React, { useState } from "react";

function DeskComponent() {
  const MUG_STATEMACHINE = "mug";
  const LAMP_STATEMACHINE = "lamp";
  const COMPUTER_STATEMACHINE = "computer";

  const { rive, RiveComponent } = useRive({
    src: "/rive/desk.riv",
    stateMachines: [MUG_STATEMACHINE, LAMP_STATEMACHINE, COMPUTER_STATEMACHINE],
    autoplay: true,
  });

  return (
    <div>
      <RiveComponent
        style={{ height: "300px", width: "400px", marginBottom: "2rem" }}
      />
    </div>
  );
}
export default DeskComponent;
