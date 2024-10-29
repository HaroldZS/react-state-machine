import React from "react";
import { useMachine } from "@xstate/react";
import bookingMachine from "../Machines/bookingMachine";

function BaseLayout() {
  const [state, send] = useMachine(bookingMachine);

  console.log(state);

  return <div>BaseLayout</div>;
}

export { BaseLayout };
