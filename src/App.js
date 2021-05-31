import React from "react";
import './bulma.min.css';
import './style.css'

export default function App() {
  const [tasks,setTasks] = React.useState([]);
  return (
    <div className="card-header">
      <h1 className="card-header-title">TO-DO-APP</h1>
      <div className="card-content">
        <form>
          <input className="input" />
          <button className="button is-info">ADD</button>
        </form>
      </div>
      <div className="card-footer">
        <p className="card-footer-item">Krystian Zieja</p>
      </div>
    </div>
  );
}
