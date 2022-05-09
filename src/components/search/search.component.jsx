import { Component } from "react";
import "./search.styles.css";

class Search extends Component {
  render() {
    const { className, onChangeHandler, placeholder } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          onChange={onChangeHandler}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

export default Search;
