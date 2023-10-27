import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import mountain1 from "../images/mountain.jpg";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={mountain1}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
