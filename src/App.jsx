import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Task from "./components/Task";
import InboxScreen from "./components/InboxScreen";

function App() {
  return (
    <div className="App">
      <InboxScreen />
    </div>
  );
}

export default App;
