import { Component } from "react";
import "./App.css";
import Search from "./components/search/search.component";
import CardList from "./components/cardList/cardList.component";

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
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  searchFieldChangeHandler = (event) => {
    this.setState({ searchField: event.target.value.toLocaleLowerCase() });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { searchFieldChangeHandler } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <h1 className="app-title">Monsters Rolodex</h1>
        <Search
          onChangeHandler={searchFieldChangeHandler}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
