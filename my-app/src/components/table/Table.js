import React from "react";
import "./style.css";

function Table(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Dob:</strong> {props.dob}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Table;