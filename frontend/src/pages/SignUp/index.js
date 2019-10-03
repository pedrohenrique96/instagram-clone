import React from "react";
import { Link } from "react-router-dom";

import { Container, Box, Form, Input, Button, Span } from "./styles";

export default function SignUp() {
  return (
    <Container>
      <Box>
        <Box textTop>
          <img alt="" src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-17.png" />
        </Box>
        <Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="name" placeholder="Full Name" />
          <Input type="name" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Register</Button>
        </Form>
        <Span>Have an account? </Span>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Span register>Log In</Span>
        </Link>
      </Box>
    </Container>
  );
}
