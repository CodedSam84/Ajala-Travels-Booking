import Cta from "../../components/cta/Cta";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";
import "./list.css";

const List = () => {
  return (
    <div className="list">
      <SearchResults/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default List;