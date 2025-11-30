import React from "react";
import { Container, Header, Form, Button } from "semantic-ui-react";

function Contact() {
  return (
    <Container id="contact" style={{ marginTop: "100px" }}>
      <Header as="h2" textAlign="center">
        Contact Us
      </Header>

      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Reach out to schedule a session or ask a question.
      </p>

      <Form style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Form.Input label="Name" placeholder="Your Name" required />
        <Form.Input label="Email" placeholder="Email Address" required />
        <Form.TextArea label="Message" placeholder="How can we help?" required />

        <Button type="submit" color="blue" fluid size="large">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
