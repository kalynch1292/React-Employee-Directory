import React from "react";
// import TableBody from '../TableBody';
import "./style.css";

function Table(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
         
        </tr>
      </thead>
      <tbody>{props.filteredEmployees.map((emp, i) => (
        <tr key={i}>
          <td>{emp.name.first} {emp.name.last}</td>
          <td>{emp.email}</td>
        </tr>
      ))}</tbody>

    </table>
  );
}
export default Table;