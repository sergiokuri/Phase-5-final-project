import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/home">Teachers</Link>
      </Logo>
      <Logo>
        <Link to="/">Reviews</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Review
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: ;
  align-items: ;
  padding: 8px;
`;

const Logo = styled.h1`
  font-size: 3rem;
  color: grey;
  margin: 0;
  line-height: 1;

  a {
    color: grey;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
