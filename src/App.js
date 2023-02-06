import React, { useState, useCallback, useRef } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [file, setFile] = useState();
  const inputRef = useRef(null);

  const handleFileChange = useCallback((event) => {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  }, []);

  return (
    <div className="App">
      <form>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </label>
        <label>
          Vendor name:
          <input
            type="text"
            value={vendor}
            onChange={(e) => {
              setVendor(e.target.value);
            }}
          />
        </label>
        <label>
          File:
          <input type="file" ref={inputRef} onChange={handleFileChange} />
        </label>
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}

export default App;
