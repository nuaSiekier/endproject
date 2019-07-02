import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import HomeText from "./Subtitles/HomeText";
import ContactForm from "./Subtitles/ContactForm";
import ServicesInfo from "./Subtitles/ServicesInfo";
import FAQRequest from "./Subtitles/FAQRequests";
import BookingForm from "./Subtitles/BookingForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Home"
          subtitle={HomeText}
          dark={true}
          id="home"
        />
        <Section
          title="Services"
          subtitle="Choose your destination"
          Component={ServicesInfo}
          dark={false}
          id="services"
        />
        <Section
          title="Send Request"
          subtitle={BookingForm}
          dark={true}
          id="send-request"
        />
        <Section
          title="FAQ"
          subtitle={FAQRequest}
          dark={false}
          id="faq"
        />
        <Section
          title="Contact"
          subtitle={ContactForm}
          dark={true}
          id="contact"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
