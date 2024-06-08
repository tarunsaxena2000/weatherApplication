import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 15vh;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterComponent = ({ theme }) => {
  return (
    <StyledFooter theme={theme}>
      <FooterContent>
        <p>© 2024 Your Company. All rights reserved.</p>
        <p>Contact: tarun-portfolio-2000.netlify.app</p>
      </FooterContent>
    </StyledFooter>
  );
};

export default FooterComponent;
