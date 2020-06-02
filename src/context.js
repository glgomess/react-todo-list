import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  console.log(action.payload);
  let tasks = [...state.tasks];
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case "REMOVE_TASK":
      tasks = tasks.filter((task) => task.id !== action.payload.id);
      return {
        ...state,
        tasks: tasks,
      };

    case "MODIFY_TASK":
      tasks = tasks.map((task) => {
        return task.id === action.payload.id ? (task = action.payload) : task;
      });
      return {
        ...state,
        tasks: tasks,
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    tasks: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
