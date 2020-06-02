import React, { Component } from "react";
import Task from "./Task";
import { Consumer } from "../context";

class TaskList extends Component {
  changeTaskListener(dispatch, task) {
    const action = { payload: task, type: "MODIFY_TASK" };
    dispatch(action);
  }

  deleteTaskListener(dispatch, task) {
    const action = { payload: task, type: "REMOVE_TASK" };
    dispatch(action);
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch, tasks } = value;
          return tasks.map((task) => {
            return (
              <Task
                name={task.name}
                description={task.description}
                removeTask={this.deleteTaskListener.bind(this, dispatch, task)}
                changeTask={this.changeTaskListener.bind(this, dispatch)}
                taskId={task.id}
                key={task.id}
              />
            );
          });
        }}
      </Consumer>
    );
  }
}

export default TaskList;
