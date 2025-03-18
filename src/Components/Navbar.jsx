import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar =styled.div`
width:100vw;
height:50px;
display:flex;
align-items:center;
background: #f8f9fa;
box-shadow:5px 5px 5px rgb(161, 161, 161);
padding:10px;`
;

const Right= styled.div`
  margin-left: auto;
  display: flex;
  gap: 50px;
  margin-right:50px;

  a {
    text-decoration: none;
    color: black;
    text-decoration:bold;
}
    a:hover{
    color:#FFE7E7;
    }
`;


const Navbar = () => {
    return (
      <NavBar>
        <Right>
          <Link to="/">Home</Link>
          <Link to="/works">View My Work</Link>
        </Right>
      </NavBar>
    );
  };

export default Navbar;