import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../Banner";
import Projects from "../Projects/Projects";
import Education from "../Education/Education";
import Intersted_Fields from "../Interested_Fields/Interested_Field"
const Home = () => {
  return (
    <Container className="px-5 py-5" id="featured-3" style={{}}>
      <Banner />
      <Projects />
      <Education />
      <Intersted_Fields />
    </Container>
  );
};

export default Home;
