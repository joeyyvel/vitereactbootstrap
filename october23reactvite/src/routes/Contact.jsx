import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import contactPic from "../images/contact.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-aboutPage"
        heroImage={contactPic}
        title="Contacts"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
