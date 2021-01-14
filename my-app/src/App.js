import React from "react";
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import emplpyee from "./employee.json"

function App() {
    return (
      <Wrapper>
              name={employee[0].name}
              email={employee[0].email}
              dob={employee[0].dob}
            </Wrapper>
    );
}           

 export default App;