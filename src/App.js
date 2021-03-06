import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/search/search.component";
import CardList from "./components/cardList/cardList.component";

const App = () => {

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users)); 
  }, []);

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      })
    );
  }, [monsters, searchField]);

  const searchFieldChangeHandler = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

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
};

export default App;
