import React, { Component } from "react";
import { Consumer } from "../context";
import Input from "./Input";

// A component that renders an input, must have its own state. (Controlled Component)
class TaskCreator extends Component {
  state = {
    name: "",
    description: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const id = Math.floor(Math.random() * 1000);
    if (name.length > 0 && description.length > 0) {
      const newTask = { name: name, description: description, id: id };
      const action = { payload: newTask, type: "ADD_TASK" };
      dispatch(action);
      this.setState({ name: "", description: "" });
    } else {
      console.log("Erro");
    }
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="container">
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <Input
                  label="newTaskName"
                  type="text"
                  id="newTaskName"
                  value={this.state.name}
                  onChange={this.onChange}
                  name="name"
                />

                <div className="form-group">
                  <label htmlFor="newTaskDescription">Task Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="newTaskDescription"
                    rows="3"
                    value={this.state.description}
                    onChange={this.onChange}
                    name="description"
                  />
                </div>
                <button className="btn btn-secondary" type="submit">
                  Submit
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default TaskCreator;
