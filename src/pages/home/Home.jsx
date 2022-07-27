import Content from "../../components/content/Content";
import Cta from "../../components/cta/Cta";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero/>
      <Content/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home;
