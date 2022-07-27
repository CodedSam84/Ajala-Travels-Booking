import Results from "../results/Results";
import Search from "../search/Search";
import "./search-results.css";

const SearchResults = () => {

  return (
    <div className="search-results">
      <Search/>
      <Results/>
    </div>
  )
}

export default SearchResults;
