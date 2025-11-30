import React from "react";
import { Container, Header, Card } from "semantic-ui-react";

const services = [
  {
    title: "Math Tutoring",
    description:
      "From elementary math to calculus, we help students master concepts with clarity."
  },
  {
    title: "Science Tutoring",
    description:
      "Support in biology, chemistry, physics, and more — engaging and simplified."
  },
  {
    title: "Reading & Writing",
    description:
      "Improve comprehension, grammar, essay writing, and overall literacy."
  },
  {
    title: "Test Preparation",
    description:
      "SAT, ACT, AP exams — personalized strategy and targeted practice."
  }
];

function Services() {
  return (
    <Container id="services" style={{ marginTop: "80px" }}>
      <Header as="h2" textAlign="center">
        Our Tutoring Services
      </Header>

      <Card.Group centered itemsPerRow={4} stackable style={{ marginTop: "40px" }}>
        {services.map((service, i) => (
          <Card
            key={i}
            className="service-card"
            header={service.title}
            description={service.description}
            raised
          />
        ))}
      </Card.Group>
    </Container>
  );
}

export default Services;
