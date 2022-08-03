import Cta from "../../components/cta/Cta";
import Footer from "../../components/footer/Footer";
import SearchResults from "../../components/search-results/SearchResults";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";

const List = () => {
  return (
    <div className="list">
      <Navbar/>
      <SearchResults/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default List;