import { useState } from "react";
import Popup from "./Popup";

const Sensor = () => {
  return (
    <div>
      <h1 class="mt-9 flex flex-col items-center text-4xl font-bold tracking-tight text-white">
        Sensors
      </h1>
      <Popup />
    </div>
  );
};

export default Sensor;
