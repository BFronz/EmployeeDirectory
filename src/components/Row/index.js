import React from "react";


const Row = ({id, name, department, role}) => (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{role}</td>   
    </tr>
  );


  export default Row;  