import Navbar from "../components/Navbar";
import servicepic from "../images/services.jpg";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={servicepic}
        title="SERVICES"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
