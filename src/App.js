import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/Card-list";
import SearchBox from "./Components/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  filteredMonsters = () => this.state.monsters.filter((monster) =>
    monster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
  );

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monters" handleChange={this.handleChange} />
        <CardList monsters={this.filteredMonsters} />
      </div>
    );
  }
}

export default App;
