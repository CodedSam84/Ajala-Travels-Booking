import Cta from "../../components/cta/Cta";
import Footer from "../../components/footer/Footer";
import Search from "../../components/search/Search";
import "./hotel.css";

const Hotel = () => {
  return (
    <div className="hotel">
      <div className="hotel-show">
        <Search/>
      </div>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Hotel;