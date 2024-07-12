import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../Banner";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <Container className="px-5 py-5" id="featured-3" style={{}}>
      <Banner />
      <Projects />
    </Container>
  );
};

export default Home;
