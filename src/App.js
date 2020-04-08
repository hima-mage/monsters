import React, { Component } from "react";
import "./App.css";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // this after component mount
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    // destruction
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      // includes return boolean
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    const handleChange = (e) => this.setState({ searchField: e.target.value });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
