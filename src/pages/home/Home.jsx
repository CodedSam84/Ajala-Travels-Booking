import Content from "../../components/content/Content";
import Cta from "../../components/cta/Cta";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";

import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <Hero/>
      <Content/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home;
