import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Table = styled.table`
  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.background === '#121212' ? '#1e1e1e' : '#ffffff'};
  color: ${({ theme }) => theme.color === '#121212' ? '#ffffff' : '#000000'}; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 1rem;
  background: ${({ theme }) => theme.background === '#121212' ? '#333' : '#f8f8f8'};
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: center;
`;

const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
`;

const WeatherTable = ({ weatherData }) => {
  const currentDate = new Date();

  return (
    <>
      <Container>
        <h2>🌦️{weatherData.name}☀️</h2>
      </Container>
      <Table>
        <thead>
          <Tr>
            <Th>Date</Th>
            <Th>Temperature</Th>
            <Th>Humidity</Th>
            <Th>Pressure</Th>
            <Th>Wind Speed</Th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <Td>{currentDate.toLocaleDateString()}</Td>
            <Td>{weatherData.main.temp} °C</Td>
            <Td>{weatherData.main.humidity} %</Td>
            <Td>{weatherData.main.pressure} hPa</Td>
            <Td>{weatherData.wind.speed} m/s</Td>
          </Tr>
        </tbody>
      </Table>
    </>
  );
};

export default WeatherTable;
