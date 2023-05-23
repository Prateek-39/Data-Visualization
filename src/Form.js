import React, { useState } from "react";

function Form(props) {
  const [dataArray, setDataArray] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the data from form inputs
    const newData = {
      // Retrieve the data fields from the form inputs
      // Example:
      name: event.target.name.value,
      value: event.target.value.value,
      // Add more fields as needed
    };
    console.log(newData);

    // Call the handleDataInput function with the new data
    handleDataInput(newData);

    // Clear the form inputs
    event.target.reset();
  };

  const handleDataInput = (dataObject) => {
    // setDataArray([...dataArray, dataObject]);
    setDataArray((dataArray) => [...dataArray, dataObject]);
    console.log(dataArray);
    props.getData(dataArray);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Render your form inputs */}
        <input type="text" name="name" placeholder="Name" />
        <input type="number" name="value" placeholder="Value" />
        {/* Add more form fields as needed */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
