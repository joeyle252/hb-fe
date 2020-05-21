import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Nav, Form, Navbar } from 'react-bootstrap';



export default function NavBar() {
  let history = useHistory();
  const signUp = () => {
    history.push("/signup")
  }
  const signIn = () => {
    history.push("/signin");
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Hobook</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="https://www.vietnamairlines.com/vn/vi/home" target="_blank">Flights</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-light" onClick={signUp} >Sign up</Button>
          <Button variant="outline-light" onClick={signIn}>Sign In</Button>
        </Form>
      </Navbar>
    </div>
  )
}





