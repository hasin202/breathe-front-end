import "./App.css";
import construction from "./assets/construction.svg";

import { useState, useEffect, useRef } from "react";
import sensorReadingsAPI from "./api/sensorReadings";

function App() {
  const [reading, setReading] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const data = await sensorReadingsAPI.getReadings();
      setReading(data);
    };
    getData();
  }, []);

  const addReading = () => {
    sensorReadingsAPI.postReading(inputRef.current.value);
  };

  return (
    <div className="center">
      <input type="text" ref={inputRef} />
      <button
        className="p-2 rounded-sm bg-black text-white"
        onClick={addReading}
      >
        ADD
      </button>
      <div>{JSON.stringify(reading)}</div>
      {/* <h1>COMING SOON</h1>
      <div className="scale-construction-img">
        <img src={construction} alt="site under construction" />
      </div> */}
    </div>
  );
}

export default App;
