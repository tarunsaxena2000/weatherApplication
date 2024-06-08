import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const ToggleButton = styled.button`
  background: ${({ theme }) => theme.color};
  border: none;
  color:white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
 
  font-size: 1rem;
   font-weight:400;
  transition: all 0.3s ease;


  ${({ theme }) => theme.background === '#121212' && `
    color: yellow; /* Change text color to yellow in dark mode */
  `}

  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    border: 1px solid ${({ theme }) => theme.color};
  }
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;  // Add gap between elements
`;

const Navbar = ({ toggleTheme, setWeatherData, theme }) => {
  return (
    <Nav theme={theme}>
      <Logo  style={{fontWeight:"700"}} > Weather <span style={{ color:'orange' }}>App</span></Logo>
      <SearchContainer>
        <ToggleButton  style={{background:'orange' ,text:'black'}} onClick={toggleTheme}>
          Theme
        </ToggleButton>
      </SearchContainer>
    </Nav>
  );
};

export default Navbar;
