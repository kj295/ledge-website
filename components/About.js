import React from "react";
import { Container, Header } from "semantic-ui-react";

function About() {
  return (
    <Container id="about" style={{ marginTop: "100px" }}>
      <Header as="h2" textAlign="center">
        About Ledge LLC
      </Header>

      <p style={{ marginTop: "20px", fontSize: "1.2rem", lineHeight: "1.7" }}>
        Ledge LLC is committed to empowering students with expert, personalized
        tutoring. Our mission is to help learners grow academically, build strong
        foundations, and unlock their potential through supportive and effective
        instruction.
      </p>
    </Container>
  );
}

export default About;
