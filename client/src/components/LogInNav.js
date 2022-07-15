import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";


function LogInNav({ user, setUser }) {

  
    return (
      <Wrapper>
        <Logo>
          <Link to="/">B</Link>
        </Logo>
        <Nav>
          <Button as={Link} to="/login">
            login
          </Button>
        </Nav>
      </Wrapper>
    );
  }

  const Wrapper = styled.header`
  display: flex;
  
  align-items: center;
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
  right: 8px;`

  export default LogInNav;

