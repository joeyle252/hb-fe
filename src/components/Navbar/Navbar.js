import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Nav, Form, Navbar } from "react-bootstrap";
import "./navbar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.user.user);
  let history = useHistory();
  const signUp = () => {
    history.push("/signup");
  };
  const signIn = () => {
    history.push("/signin");
  };

  const signOut = () => {
    const signOutAction = {
      type: "SIGNOUT_USER",
    };
    dispatch(signOutAction);
    history.push("/");
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar bg="primary" variant="light">
        <Navbar.Brand href="#home" style={{ paddingLeft: "10px" }}>
          BORO
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Travel's Information</Nav.Link>
          <Nav.Link href="#features"></Nav.Link>
          <Nav.Link href="https://www.vietnamairlines.com/vn/vi/home" target="_blank">
            Flights
          </Nav.Link>
        </Nav>
        <Form inline style={{ paddingRight: "10px" }}>
          {isUserLoggedIn ? (
            <Button variant="light" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <>
              <Button variant="outline-light" onClick={signUp}>
                Sign up
              </Button>
              <Button variant="outline-light" onClick={signIn}>
                Sign In
              </Button>
            </>
          )}
        </Form>
      </Navbar>
    </div>
  );
}
