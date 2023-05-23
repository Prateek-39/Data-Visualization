import React, { useState } from "react";

function Form(props) {
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
    props.getData(newData);

    event.target.reset();
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
