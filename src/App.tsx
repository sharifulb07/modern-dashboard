import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Expenses from "./pages/Expenses/Expenses";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </div>
  );
}

export default App;
