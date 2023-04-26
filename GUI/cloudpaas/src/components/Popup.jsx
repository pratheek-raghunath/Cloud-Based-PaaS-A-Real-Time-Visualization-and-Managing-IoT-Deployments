import React, { useState } from "react";
import MyPopup from "./ShowPopup";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <button
        // id="model-btn"
        onClick={() => setShowPopup(true)}
        className=" float-right mr-5 mt-16 rounded bg-blue-700 px-2 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add Sensors
      </button>
      <div className="   items-center rounded-lg    p-40 ">
        <div class="m-6 flex justify-between rounded-lg bg-white px-6 py-6 font-bold text-black">
          <div>Pressure</div>
          <div className=" text-right">Running</div>
        </div>
        <div class="m-6 flex justify-between rounded-lg bg-white px-6 py-6 font-bold text-black">
          <div>Gas</div>
          <div className=" text-right">Running</div>
        </div>
        <div class="m-6 flex justify-between rounded-lg bg-white px-6 py-6 font-bold text-black">
          <div>Temperature</div>
          <div className=" text-right">Running</div>
        </div>
        <div class="m-6 flex justify-between rounded-lg bg-white px-6 py-6 font-bold text-black">
          <div>IR</div>
          <div className=" text-right">Running</div>
        </div>
        <div class="m-6 flex justify-between rounded-lg bg-white px-6 py-6 font-bold text-black">
          <div>Accelerometer</div>
          <div className=" text-right">Running</div>
        </div>
      </div>
      {showPopup && <MyPopup closePopup={closePopup} />}
    </>
  );
};

export default Popup;
