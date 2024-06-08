import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WeatherTable from './components/WeatherTable';
import ImageSlider from './components/ImageSlider';
import Search from './components/Search';
import styled, { ThemeProvider } from 'styled-components';
import FooterComponent from './components/FooterComponent.js';


const lightTheme = {
  background: 'rgba(240, 240, 240, 0.7)', // Semi-transparent background
  color: '#000000',
};

const darkTheme = {
  background: 'rgba(18, 18, 18, 0.7)', // Semi-transparent background
  color: '#ffffff',
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  transition: background-color 0.3s, color 0.3s;
  padding-top: 70px; /* Added padding to account for fixed navbar */
  position: relative; /* Needed for absolute positioning of ImageSlider */
`;

const WeatherContainer = styled.div`
  margin-top: 20vh;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  z-index: 1;
`;

const Advertisement = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  z-index: 1;
`;
const Footer = styled.footer`
  width: 100%;
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  position: absolute;
  bottom: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;




const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [weatherData, setWeatherData] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
   <>
     <ThemeProvider theme={theme}>
      <Container>
        <ImageSlider />
        <Navbar toggleTheme={toggleTheme} setWeatherData={setWeatherData} />
        <Search setWeatherData={setWeatherData} />
        {weatherData && (
          <WeatherContainer>
            <WeatherTable weatherData={weatherData} />
          </WeatherContainer>
        )}
        
      </Container>
    </ThemeProvider>
<FooterComponent></FooterComponent>
   </>
   
    
  );
};

export default App;
