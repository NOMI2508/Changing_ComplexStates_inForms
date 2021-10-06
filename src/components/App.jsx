import React, { useState } from "react";

function App() {
  const [FullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {FullName.fName} {FullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={FullName.fName}
        />

        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={FullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
