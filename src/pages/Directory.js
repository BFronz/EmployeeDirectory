import React from "react";
import Container from "../components/Container";

const Row = ({id, name, department, role}) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{department}</td>
    <td>{role}</td>   
  </tr>
);

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
           { id: 1, name: 'John Smith',    department: 'IT',    role: 'DBA' },
           { id: 2, name: 'Angela Hull',   department: 'IT',    role: 'Web Developer' },
           { id: 3, name: 'Mike Carvill',  department: 'IT',    role: 'Web Developer' },
           { id: 4, name: 'Joe Green',     department: 'IT',    role: 'Manager' },
           { id: 5, name: 'Anne Jenson',   department: 'Sales', role: 'Salesperson' },
           { id: 6, name: 'Lou Holtz',     department: 'Sales', role: 'Salesperson' },
           { id: 7, name: 'Sally Angus',   department: 'Sales', role: 'Manager' },
           { id: 8, name: 'Hans Gruber',   department: 'Sales', role: 'Clerk' },          
           { id: 9,  name: 'Tim Cook',     department: "Management", role: 'CEO' },
           { id: 10, name: 'Kim Helregal', department: "Management", role: 'Vice Presedent' },
           { id: 11, name: 'Joan Clark',   department: "Management", role: 'Office Manager' },
           { id: 12, name: 'Sammy Davis',  department: "Management", role: 'Administrator' },
           { id: 11, name: 'Kay Parker',   department: "Accounting", role: 'CPA' },
           { id: 12, name: 'Lisa DeLee',   department: "Accounting", role: 'Accountant' },  
           { id: 13, name: 'Tom Hunt',     department: "Accounting", role: 'Accountant' },
           { id: 14, name: 'Virginia Tool',department: "HR", role: 'Manager' } 
      ],
      search: ''
    };

    this.compareBy.bind(this);
    this.sortBy.bind(this);
   
  }



updateSearch(event) {
  console.log(event.target.value);
  this.setState({search: event.target.value.substr(0.20)});

}
  
  
  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy(key) {
    let arrayCopy = [...this.state.data];
    arrayCopy.sort(this.compareBy(key));
    this.setState({data: arrayCopy});
  }
    
  render() {
    let filteredNames = this.state.data.filter(
      (data) => {
        return data.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    const rows = filteredNames.map( (rowData) => <Row  {...rowData} />);
    // const rows = this.state.data.map( (rowData) => <Row  {...rowData} />);

    return (
      <Container style={{ minHeight: "80%" }}>

      <div className="text-center mt-3 mb-3 font-weight-bold">
        Search Employee Name: &nbsp;  
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
      </div>
      
      <table className="table">
        <thead className="thead-light">
        <tr>
          <th scope="col" onClick={() => this.sortBy('id')} >ID</th>
          <th scope="col" onClick={() => this.sortBy('name')}>Name</th>
          <th scope="col" onClick={() => this.sortBy('department')}>Department</th>
          <th scope="col" onClick={() => this.sortBy('role')}>Role</th>
        </tr>
        </thead>
          <tbody>
            {rows}
          </tbody>
        </table>

      </Container>
    );
    
  }
}

export default Table;
