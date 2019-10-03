import React from "react";
import { Link } from "react-router-dom";

import { Container, Box, Form, Input, Button, Span } from "./styles";

export default function SignIn() {
  async function handleSingIn(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <Box>
        <Box textTop>
          <img alt="" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png" />
        </Box>
        <Form>
          <Input type="email" placeholder="E-mail or Username" />
          <Input type="password" placeholder="Password" />
          <Button onClick={handleSingIn}>Access</Button>
        </Form>

        <Span>Don't have an account? </Span>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Span register>Register</Span>
        </Link>
      </Box>
    </Container>
  );
}
