import React, { Component } from 'react';
import Table from './components/Table';
import API from  './utils/API'
import "./index.css";
import Search from "./components/Search";


class App extends Component {
  state={
    search: "",
    filteredEmployees: [],
    employees:[]
  }

  componentDidMount(){
    this.getUsers()
  }
  
  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, function(){
      const searched = this.state.search.toLowerCase()
      const searchedEmp = this.state.employees.filter(emp => {
        let fullName = `${emp.name.first} ${emp.name.last}`
        fullName = fullName.toLowerCase()
        return fullName.includes(searched)
      })
      this.setState({filteredEmployees: searchedEmp})
    })
  }

  keyPress = (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
      }
  }

  getUsers = () => {
    API.getUsers().then(res => {
      console.log(res.data.results)
      this.setState({employees: res.data.results, filteredEmployees: res.data.results})
    })
  }

  render(){
    return (
      
      <div className="App">
        {/* this line pulls in table component and passes employees from state*/}
        <Search
        search={this.state.search} 
        keyPress={this.keyPress} 
        handleInputChange= {this.handleInputChange} />
       <Table filteredEmployees ={this.state.filteredEmployees}/>
       {/* <Search exact path="/search" component={Search} /> */}
      </div>
      
    );

  }
}

export default App;
