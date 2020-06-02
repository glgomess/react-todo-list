import React, { Component } from "react";

class Task extends Component {
  state = {
    id: this.props.taskId,
    name: "",
    description: "",
    toggleModify: false,
  };

  changeProperties = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  modifyTask = () => {
    this.setState({ toggleModify: !this.state.toggleModify });
  };

  a = () => {
    this.props.changeTask(this.state);
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <h6 className="card-text">{this.props.description}</h6>
          <button className="btn btn-primary" onClick={this.props.removeTask}>
            Deletar
          </button>
          <button className="btn btn-primary" onClick={this.modifyTask}>
            Modificar
          </button>
          {this.state.toggleModify ? (
            <div className="container">
              <label htmlFor="name">New name:</label>
              <input
                type="text"
                name="name"
                onChange={this.changeProperties}
              ></input>
              <label htmlFor="description">New description:</label>
              <input
                type="text"
                name="description"
                onChange={this.changeProperties}
              ></input>
              <button className="btn btn-primary" onClick={this.a}>
                Change me!
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Task;
