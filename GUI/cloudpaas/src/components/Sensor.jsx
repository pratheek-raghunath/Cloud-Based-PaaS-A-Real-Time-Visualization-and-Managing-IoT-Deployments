import Popup from "reactjs-popup";

const Sensor = () => {
  //navigate to dashboard automatically if auth token is present in local storage

  return (
    <div>
      <h1 class="mt-9 flex flex-col items-center text-3xl font-bold tracking-tight text-blue-700">
        Sensors
      </h1>

      <Popup
        trigger={
          <button
            id="btn-sensor"
            class=" float-right rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800   focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Sensor
          </button>
        }
      >
        <div className="text-white">Pop up content</div>
      </Popup>
    </div>
  );
};

export default Sensor;
