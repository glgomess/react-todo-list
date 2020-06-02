import React from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="App">
        <TaskCreator />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
