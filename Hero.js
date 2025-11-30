import React from "react";
import { Button, Container } from "semantic-ui-react";
import "../App.css";

function Hero() {
  return (
    <div className="hero-section">
      <Container>
        <h1 className="hero-title">Your Path to Academic Excellence</h1>
        <p className="hero-subtitle">
          Personalized tutoring designed to build confidence, mastery, and success.
        </p>
        <Button
          size="huge"
          color="yellow"
          style={{ marginTop: "30px", fontWeight: "700" }}
          href="#contact"
        >
          Book a Session
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
