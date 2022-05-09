import "./search.styles.css";

const Search = ({ className, onChangeHandler, placeholder }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  </div>
);

export default Search;
