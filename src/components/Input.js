import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.label}>Task Name</label>
      <input
        type={props.type}
        className="form-control"
        id={props.inputId}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};

export default Input;
