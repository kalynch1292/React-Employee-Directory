import React, { Component } from "react";
import API from "../utils/API";
// import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    firstName: [],
    lastName: [],
    email: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getUsers()
      .then(res => this.setState({ randomUser: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getUsers(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        {/* <Container style={{ minHeight: "80%" }}> */}
          <h1 className="text-center">Search By Name or Email!</h1>
          {/* <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert> */}
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            resUser={this.state.randomUser}
          />
          <SearchResults results={this.state.results} /> */}
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;