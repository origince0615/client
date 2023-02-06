import React, { useState, useCallback, useRef } from "react";
import axios from "axios";

import "./App.css";

const SERVER_URL = "http://localhost:3003";
function App() {
  const [date, setDate] = useState("");
  const [vendor, setVendor] = useState("");
  const [file, setFile] = useState();
  const inputRef = useRef(null);

  const onHandleSubmit = async (event) => {
    const formData = new FormData();
    formData.append("date", date);
    formData.append("vendor", vendor);
    formData.append("file", file);

    const res = await axios.post(`${SERVER_URL}/api/dtaa`, formData);
    if (res.data.valid === true) {
      alert("Upload successfuly!! This is a valid data!");
    } else {
      alert("Upload failed! This is not an valid data!");
    }
  };

  const handleFileChange = useCallback((event) => {
    if (!event.target.files) {
      return;
    }
    setFile(event.target.files[0]);
  }, []);

  return (
    <div className="App">
      <form onSubmit={onHandleSubmit}>
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
