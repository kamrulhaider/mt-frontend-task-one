/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="top-bar d-flex justify-content-between align-items-center">
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <a className="text-success" href="">
            BN
          </a>
          <span> / </span>
          <a href="">EN</a>
        </div>
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="align-items-center mx-auto">
            <div className="d-flex">
              <Nav.Link href="">HOME</Nav.Link>
              <Nav.Link href="">ADVERTISERS</Nav.Link>
              <Nav.Link href="">PUBLISHERS</Nav.Link>
              <Nav.Link href="">INFLUENCERS</Nav.Link>
              <Nav.Link href="">AD FORMATS</Nav.Link>
              <Nav.Link href="">BLOG</Nav.Link>
              <Nav.Link href="">CONTACT US</Nav.Link>
            </div>
            <div className="py-2 px-4 shadow rounded-pill">
              <button className="login-btn" type="button">
                LOGIN
              </button>
              <button
                className="signup-btn rounded-pill px-3 py-2"
                type="button"
              >
                SIGN UP
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
